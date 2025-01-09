from flask import Flask, request, send_file, render_template
from rembg import remove
from io import BytesIO
from PIL import Image

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/removebg', methods=['POST'])
def remove_background():
    if 'image' not in request.files:
        return {"error": "No image file provided"}, 400

    # Get the image
    image_file = request.files['image']

    try:
        image = Image.open(image_file.stream)
    except Exception:
        return {"error": "Invalid image file"}, 400


    # Remove the background
    result = remove(image)

    # Convert to bytes
    output = BytesIO()
    result.save(output, format='PNG')
    output.seek(0)

    return  send_file(output, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
