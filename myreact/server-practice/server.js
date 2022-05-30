const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/server-practice', (req, res) => {
    res.send('한글을 실행');
});

app.listen(port, () => console.log(`Listening on port ${port}`));