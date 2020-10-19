const { check } = require('express-validator');
const moment = require('moment');

module.exports = {
	requireEmail: check('email')
        .notEmpty()
        .withMessage('O campo email é obrigatório')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Esse não é um e-mail válido'),
    requireCPF: check('cpf')
        .notEmpty()
        .withMessage('Esse campo é obrigatório')
        .isLength({ min: 14, max: 14 })
        .withMessage('Esse CPF não é válido'),
    requireBirth: check('data_nasc')
        .notEmpty()
        .withMessage('Esse campo é obrigatório')
        .custom((data_nasc) => {
            if (!moment(data_nasc, 'DD/MM/YYYY', true).isValid()) {
                throw new Error('Essa data não é válida');
            }
            return true;
        }),
    requirePassword:  check('senha')
        .notEmpty()
        .withMessage('Esse campo é obrigatório')
        .trim()
        .isLength({ min: 6, max: 20 })
        .withMessage('Sua senha deve ter entre 6 e 20 caracteres'),
    requirePolicy: check('politica_priv')
        .equals('on')
        .withMessage('Esse campo é obrigatório'),
};
