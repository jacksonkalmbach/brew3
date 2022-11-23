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

app.get('/pizzerias', (req, res) => {
    res.json([
        {
            "id": 1,
            "name":"Joe's Pizza",
            "location": "Multiple Locations",
            "score": "🍕🍕🍕🍕🍕"
        }, 
        {
            "id": 2,
            "name":"Zazzy's Pizza",
            "location": "West Village",
            "score": "🍕🍕🍕🍕"
        },
        {
            "id": 3,
            "name":"Burrata",
            "location": "East Village",
            "score": "🍕🍕🍕"
        },
        {
            "id": 4,
            "name":"Joe and Pat's",
            "location": "East Village",
            "score": "🍕🍕🍕"
        },
        {
            "id": 5,
            "name":"Posto",
            "location": "Gramercy",
            "score": "🍕🍕🍕🍕"
        },
        {
            "id": 6,
            "name":"John's of Bleeker Street",
            "location": "West Village",
            "score": "🍕🍕🍕🍕"
        },
        {
            "id": 7,
            "name":"Bravo Pizza",
            "location": "Chelsea",
            "score": "🍕🍕🍕"
        }
    ])
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}.`)
});

