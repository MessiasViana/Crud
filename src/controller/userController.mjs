import user from '../model/userModel.mjs';

function register(name, email, password) {
    let message = '';

    user.name = name;
    user.email = email;
    user.password = password;

    const local = JSON.parse(localStorage.getItem('users'));

    if (local !== null) {
        const accounts = [];

        local.forEach(account => {
            accounts.punsh(account);
        });
    }

    return 'cadastrado';
}

function login(email, password) {
    console.log(JSON.parse(localStorage.getItem('users')));
}

export { login, register };
