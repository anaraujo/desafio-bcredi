module.exports = {
    getError(errors, prop) {
        try {
            return errors.mapped()[prop].msg;
        } catch (err) {
            return '';
        }
    },
    getErrorClass(errors, prop) {
        if (errors && errors.mapped()[prop]) {
            return 'has-error';
        }
        else {
            return '';
        }
    },
    getInputValue(inputValues, prop) {
        try {
            return inputValues[prop];
        } catch (err) {
            return '';
        }
    },
    getSuccess(success) {
        if (success != undefined) { 
           return success;
        } else {
            return '';
        }
    }
};