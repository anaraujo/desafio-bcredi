
const supertest = require('supertest');
const app = require('../index');

describe('GET \'/\'', function() {
	it('has status code 200', function(done) {
		supertest(app)
			.get('/')
			.expect(200)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});

describe('POST \'/\'', function() {
	it('has status code 200 when all form fields are filled properly', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(200)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});

describe('POST \'/\' - email field check', function() {
	it('has status code 400 when field is empty', function(done) {
		supertest(app)
			.post('/')
			.set({ email: '', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when email is not valid', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});

describe('POST \'/\' - cpf field check', function() {	
	it('has status code 400 when field is empty', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when cpf is too short', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when cpf is too long', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-888', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when cpf is not formatted', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '88888888888', data_nasc: '08/10/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});

describe('POST \'/\' - date of birth field check', function() {
	it('has status code 400 when field is empty', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when date is invalid', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '88/88/1995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when date doesn\'t fit the pattern DD/MM/YYYY', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08/10/95', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when date is not formatted', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08101995', senha: '12345678', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});

describe('POST \'/\' - password field check', function() {
	it('has status code 400 when field is empty', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when password is too short', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '1234', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
	it('has status code 400 when password is too long', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '123456789123456789123456789', politica_priv: 'on'})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});

describe('POST \'/\' - privacy policy field check', function() {
	it('has status code 400 when checkbox is not selected', function(done) {
		supertest(app)
			.post('/')
			.set({ email: 'teste@teste.com', cpf: '888.888.888-88', data_nasc: '08/10/1995', senha: '12345678', politica_priv: ''})
			.expect(400)
			.end((err) => {
				if (err) done(err);
				return done();
			});
	});
});