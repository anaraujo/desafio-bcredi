const express = require('express');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const mainTemplate = require('./views/template');

const {
	requireEmail,
	requireCPF,
	requireBirth,
	requirePassword,
	requirePolicy
} = require('./public/scripts/validators');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(mainTemplate({}));
});

app.post(
    '/', 
    [ requireEmail, requireCPF, requireBirth, requirePassword, requirePolicy ],
    (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.send(mainTemplate({ errors }));
        }
        
        res.send(mainTemplate({}));
    }
);

app.listen(3000, () => {
	console.log('Listening');
});