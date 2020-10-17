const express = require('express');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set( 'view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('template');
});

app.post('/', [
    check('email')
        .trim()
        .isEmail()
        .normalizeEmail(),
    check('cpf').isLength({ min: 14, max: 14 }),
    check('data_nasc').custom((data_nasc) => moment(data_nasc, 'DD/MM/YYYY').isValid()),
    check('senha').trim().isLength({ min: 6, max: 20 }),
    check('politica_priv').equals('on')
],(req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    const { email, cpf, data_nasc, senha, politica_priv } = req.body;
	res.render('template');
});

app.listen(3000, () => {
	console.log('Listening');
});