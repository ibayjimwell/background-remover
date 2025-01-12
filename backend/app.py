from flask import Flask, request, send_file, send_from_directory
from rembg import remove
from io import BytesIO
from PIL import Image
from flask_cors import cross_origin

app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/removebg', methods=['POST'])
@cross_origin()
def remove_background():
    if 'image' not in request.files:
        return {"error": "No image file provided"}, 400

    # Get the image
    image_file = request.files['image']
    original_filename = image_file.filename

    try:
        with image_file.stream as stream:
            image = Image.open(stream)

            # Remove the background
            result = remove(image)

            # Convert to bytes
            output = BytesIO()
            result.save(output, format='PNG')
            output.seek(0)

            if not original_filename.lower().endswith('.png'):
                original_filename = f"{original_filename.rsplit('.', 1)[0]}.png"

            return send_file(output, mimetype='image/png', as_attachment=True, download_name=original_filename)

    except Exception:
        return {"error": "Invalid image file"}, 400

@app.route('/<path:path>')
def serve_static(path):
    try:
        return send_from_directory(app.static_folder, path)
    except:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
