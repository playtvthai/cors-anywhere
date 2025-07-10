// server.js (หรือไฟล์หลักของ cors-anywhere)
const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: ['https://dooballplus.live', 'http://localhost:3000'], // ✅ ใส่โดเมนที่อนุญาต
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(8080, () => {
    console.log('Running CORS Anywhere on port 8080');
});
