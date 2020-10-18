const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const mainTemplate = require('./views/template');
const { requireEmail, requireCPF, requireBirth, requirePassword, requirePolicy } = require('./public/scripts/validators');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(mainTemplate({}));
});

const handleErrors = (templateFunc) => {
    return async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.send(mainTemplate({ errors }));
        }

        next();
    };
};

app.post(
    '/', 
    [ requireEmail, requireCPF, requireBirth, requirePassword, requirePolicy ],
    handleErrors(mainTemplate),
    (req, res) => {
        res.redirect(mainTemplate({}));
    }
);

app.listen(3000, () => {
	console.log('Listening');
});