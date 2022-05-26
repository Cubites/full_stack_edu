const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/app/hello', (req, res) => {
    res.send({ message : 'Welcome NodeJs Server!' });
})

app.listen(port, () => console.log(`Listening on port ${port}`));