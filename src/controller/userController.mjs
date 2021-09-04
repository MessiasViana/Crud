import accounts from '../global/user-list.mjs';

function register(name, email, password) {
    let message = '';

    const user = {
        name,
        email,
        password
    };

    accounts.forEach(account => {
        if (account.email === email) {
            message = 'Já existe um usuário com este e-mail... por favor inserir outro!';
        }
    });

    if (message !== '') {
        return message;
    }

    accounts.push(user);

    return 'cadastrado';
}

function login(email, password) { }

export { login, register };
