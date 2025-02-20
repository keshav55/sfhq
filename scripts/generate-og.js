const fs = require('fs');
const https = require('https');
const http = require('http');

// Fetch from local dev server
const url = 'http://localhost:3001/api/og';
const outputPath = 'public/og-image.jpg';

http.get(url, (res) => {
  const chunks = [];

  res.on('data', (chunk) => {
    chunks.push(chunk);
  });

  res.on('end', () => {
    const buffer = Buffer.concat(chunks);
    fs.writeFileSync(outputPath, buffer);
    console.log(`✓ OG image saved to ${outputPath}`);
  });
}).on('error', (err) => {
  console.error('Error fetching OG image:', err);
}); 