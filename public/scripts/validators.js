const { check } = require('express-validator');
const moment = require('moment');

module.exports = {
	requireEmail: check('email')
        .notEmpty()
        .withMessage('O campo email é obrigatório')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Este não é um e-mail válido'),
    requireCPF: check('cpf')
        .notEmpty()
        .withMessage('O campo CPF é obrigatório')
        .isLength({ min: 14, max: 14 })
        .withMessage('Seu CPF deve ter 14 caracteres'),
    requireBirth: check('data_nasc')
        .notEmpty()
        .withMessage('O campo data de nascimento é obrigatório')
        .custom((data_nasc) => {
            if (!moment(data_nasc, 'DD/MM/YYYY').isValid()) {
                throw new Error('Esta não é uma data válida');
            }
        }),
    requirePassword:  check('senha')
        .notEmpty()
        .withMessage('O campo senha é obrigatório')
        .trim()
        .isLength({ min: 6, max: 20 })
        .withMessage('Sua senha deve ter entre 6 e 20 caracteres'),
    requirePolicy: check('politica_priv')
        .equals('on')
        .withMessage('É preciso aceitar as políticas de privacidade e uso de informações'),
};
