const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;


app.use(express.static(path.resolve(__dirname, 'public')))
app.use(cors());

app.get('/hungry', (req, res) => {
    res
    .status(200)
    .send('Baby got Back(end)! 🍑');
})

app.get('/api', (req, res) => {
    res.json({
        "shops":["Joe's Pizza","Zazzy's Pizza","Burrata Pizza", "Joe and Pat's", "Posto"],
        "locations":["Multiple","West Village","East Village", "East Village", "Gramercy"],
        "score":["🍕🍕🍕🍕🍕","🍕🍕🍕🍕","🍕🍕🍕", "🍕🍕🍕🍕", "🍕🍕🍕🍕"],
    })
})

app.get('/pizzerias', (req, res) => {
    res.json({
        "names":["Joe's Pizza","Zazzy's Pizza","Burrata Pizza", "Joe and Pat's", "Posto"],
        "locations":["Multiple","West Village","East Village", "East Village", "Gramercy"],
        "score":["🍕🍕🍕🍕🍕","🍕🍕🍕🍕","🍕🍕🍕", "🍕🍕🍕🍕", "🍕🍕🍕🍕"],

    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}.`)
});

