const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.send('<h1>99 bottles of beer on the wall</h1> <a href="/98">take one down, pass it around</a>');
});

app.get('/:id', (req, res) => {
    if (req.params.id < 1) {
        res.send('<h1>All out!</h1>')
    } else {
        res.send(`<h1>${req.params.id} bottles of beer on the wall</h1>
        <a href="${req.params.id - 1}">Take one down, pass it around</a>`)
        }
})




app.listen(3000, function() {
    console.log('listening on port 3000')
});