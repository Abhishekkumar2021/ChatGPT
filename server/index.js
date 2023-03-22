const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`You can access the server at http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.send('The main paths starts with /api');
});
app.use('/api', api);
