const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(process.env.SALAH);
});

app.listen(process.env.THPORT, () => {
    console.log('Example app listening on port port!');
});