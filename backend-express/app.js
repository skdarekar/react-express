const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3001;

app.get('/', (req, res) => {
    res.send({
        Message: 'Hello World!', routes: ["/download"]
    });
})

app.get('/download', (req, res) => {
    res.download('./files/logo.png');
})

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})