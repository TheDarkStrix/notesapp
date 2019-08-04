const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(6969, err => {
    if (err) throw err;
    console.log(`> Server running on http://localhost:6969`);
});