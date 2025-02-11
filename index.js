const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint to Get Image List
app.get('/api/gallery', (req, res) => {
    const galleryPath = path.join(__dirname, 'public/image/gallery');

    fs.readdir(galleryPath, (err, files) => {
        if (err) {
            console.error("Error reading gallery folder:", err);
            return res.status(500).json({ error: "Unable to load images" });
        }

        const imageFiles = files.filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file));
        console.log("Image files:", imageFiles);
        res.json(imageFiles);
    });
});

// Serve index.html for valid frontend routes
app.get(['/', '/about', '/services', '/contact'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

// 404 Error Handler (Serve 404.html)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public/html', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});