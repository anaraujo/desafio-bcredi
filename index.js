const express = require('express');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

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
    check('cpf'),
    check('data_nasc'),
    check('senha').trim().isLength({ min: 6, max: 20 }),    
],(req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    const { email, cpf, data_nasc, senha } = req.body;
	res.send(mainTemplate());
});

app.listen(3000, () => {
	console.log('Listening');
});