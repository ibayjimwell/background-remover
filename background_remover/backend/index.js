const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
const upload = multer();

// Serve static files and fallback to index.html for vue ruotes 
app.get('*', (req, res) => {
    const requestedPath = path.join(__dirname, 'dist', req.path);
    if(fs.existsSync(requestedPath) && fs.lstatSync(requestedPath).isFile()) {
        return res.sendFile(requestedPath);
    }
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Remove background of the image API
app.post('/api/removebg', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({error: 'No image provided'})
    }

    const formData = new FormData();
    const blob =  Buffer.from(req.file.buffer);
    formData.append('image_file', blob, {filename: req.file.originalname});
    formData.append('size', 'auto');

    try {
        const response = await axios.post(
            'https://api.remove.bg/v1.0/removebg',
            formData,
            {
                headers: {
                    'X-Api-Key': 'rDEkmymwt9qk9DNRShiaBCFk',
                    ...formData.getHeaders(), // Required for multipart form data
                },
                responseType: 'arraybuffer'
            }
        );

        if (response.status === 200) {
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Content-Disposition', 'attachment; filename=no-bg.png');
            return res.send(response.data);
        } else {
            return res.status(response.status).json({
                error: 'Failed to remove background',
                details: response.data,
            });
        }
 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`);
});

module.exports = app;

