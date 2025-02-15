from flask import Flask, request, send_file, send_from_directory, jsonify
from flask_cors import cross_origin
import requests
from io import BytesIO
import os

app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    full_path = os.path.join(app.static_folder, path)
    if path and os.path.exists(full_path):
        # Serve the static file if it exists
        return send_from_directory(app.static_folder, path)
    # Fallback to index.html for Vue routes
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/removebg', methods=['POST'])
@cross_origin()
def remove_background():

    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']

    try:
        response = requests.post(
            'https://api.remove.bg/v1.0/removebg',
            files={'image_file': image_file.stream},  # Stream the image from the form-data
            data={'size': 'auto'},
            headers={'X-Api-Key': 'rDEkmymwt9qk9DNRShiaBCFk'},  # Replace with your API key
        )

        if response.status_code == requests.codes.ok:
            # Return the processed image as a response
            return send_file(
                BytesIO(response.content),
                mimetype='image/png',
                as_attachment=True,
                download_name='no-bg.png'
            )
        else:
            return jsonify({
                'error': 'Failed to remove background',
                'details': response.json()  # Provide error details from remove.bg API
            }), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
