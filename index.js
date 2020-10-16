const express = require('express');
const bodyParser = require('body-parser');

const mainTemplate = require('./views/template.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(mainTemplate());
});

app.post('/', (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
	res.send('Account created!');
});

app.listen(3000, () => {
	console.log('Listening');
});
