const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('hello world');
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}.`)
});

