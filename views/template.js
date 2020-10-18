const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg;
    } catch (err) {
        return '';
    }
};

const getSuccess = (success) => {
    if (success != undefined) { 
       return success;
    } else {
        return '';
    }
};

module.exports = ({ errors, success }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <!-- Required meta tags -->
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <!-- Custom CSS -->
                <link rel="stylesheet" type="text/css" href="stylesheets/main.css">

                <!-- Favicon -->
                <link rel="shortcut icon" href="imgs/favicon.ico" type="image/x-icon">
                <link rel="icon" href="imgs/favicon.ico" type="image/x-icon">
                    
                <title>Bcredi</title>
            </head>
            <body>
                <main class="register-page">
                    <section class="image-section">
                        <div class="shadow"></div>
                        <h2>"Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."</h2>
                        <p class="name">Camila Bragança,</p>
                        <p>Sideral Tecnologia</p>
                    </section>
                    <section class="form-section">
                        <header>
                            ${getSuccess(success)}
                            <img src="imgs/logo.svg" alt="Bcredi logo">
                        </header>

                        <div class="form-wrapper">
                            <form method="POST">
                                <h1 class="form-title">Criar meu cadastro</h1>
                                <p class="form-description">Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</p>
                
                                <div class="input-wrapper">
                                    <label for="email">E-mail</label>
                                    <input type="text" id="email_input" name="email" placeholder="ana.maria@email.com">
                                    <p class="error-msg">${getError(errors, 'email')}</p>
                                </div>

                                <div class="cpf-nasc">
                                    <div class="input-wrapper">
                                        <label for="cpf">CPF</label>
                                        <input type="text" id="cpf_input" name="cpf" placeholder="000.000.000-00">
                                        <p class="error-msg">${getError(errors, 'cpf')}</p>
                                    </div>
                    
                                    <div class="input-wrapper">
                                        <label for="data_nasc">Data de nascimento</label>
                                        <input type="text" id="birth_input" name="data_nasc" placeholder="DD/MM/AAAA">
                                        <p class="error-msg">${getError(errors, 'data_nasc')}</p>
                                    </div>
                                </div>
                
                                <div class="input-wrapper">
                                    <label for="senha">Senha</label>
                                    <div class="password-wrapper">
                                        <input type="password" id="password_input" name="senha" placeholder="Cadastre uma senha">
                                        <i id="password_toggle" class="icon eye-icon"></i>
                                    </div>
                                    <p class="error-msg">${getError(errors, 'senha')}</p>
                                </div>
                
                                <div class="policy-wrapper">
                                    <div class="privacy-policy">
                                        <input type="checkbox" id="policy_input" class="checkbox-input" name="politica_priv">
                                        <p class="link-wrapper">Li e estou de acordo com a <a href="#">Política de Privacidade</a> e a <a href="#">Política de Uso de Informações</a>.</small>
                                    </div>
                                    <p class="error-msg">${getError(errors, 'politica_priv')}</p>
                                </div>
                
                                <button class="main-button">
                                    <i class="icon lock-icon"></i>
                                    Cadastrar
                                </button>
                            </form>
                
                            <footer>
                                <p class="link-wrapper">Já fiz meu cadastro. <a href="#">Entrar agora.</a></p>
                            </footer>
                        </div>
                    </section>
                </main>

                <!-- Optional Javascript -->
                <script src="/scripts/bundle.js"></script>
            </body>
        </html>
    `;
};