# Bcredi Front-end Challenge &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Solution for Bcredi's front-end challenge.

## Installing / Getting started

To run this project locally on your machine, you just need to follow these two steps:

```shell
npm i
npm start
```

After installing the dependencies, node will start a local server on port 3000 and watch for javascript and css changes. You can now access this application on your browser, at localhost:3000

Alternatively, you can access the deployed version of this project at https://desafio-bcredi.herokuapp.com/

## Developing

### Built With
This application doesn't use any frameworks, but it does run with Node.js. 

#### Libraries used

- **express:** for request handling and application structure
- **express-validator:** to validate form fields
- **jQuery:** to facilitate DOM manipulation
- **jQuery Mask Plugin**: to mask the CPF and birth date inputs
- **Moment.js**: to validate the birth date field
- **node-sass:** to compile Sass files
- **nodemon:** to restart the server when the code changes
- **sass-autoprefixer:** to ensure css cross-browser compatibility
- **watchify:** to watch and recompile the bundle.js file when changes are made

**Mocha** and **SuperTest** are also used, but for testing purposes.

## Tests

To test the application, simply run:

```shell
npm test
```

The code written will test the success or failure of the GET and POST requests, including cases where the user inputs information incorrectly on the registration form.

## Style guide

This is a short application, so the style organization is very simple. Bigger components like inputs or the submit button are declared in separated files (in the *components* folder), design system items like typography and color variables are also in separated files (in the *shared* folder). The rest of the css is grouped in the main.scss file, as well as the import for all the others .scss files. 
