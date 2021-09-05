function register(name, email, password) {
    let message = '';

    const user = {
        name,
        email,
        password
    };

    let accounts = JSON.parse(localStorage.getItem('accounts'));
    if(accounts === null) {
        accounts = user;
    } else {
        accounts = Array.from(accounts);
        accounts.forEach(account => {
            if (account.email === email) {
                message = 'Já existe um usuário com este e-mail... por favor inserir outro!';
            }
        });

        if (message !== '') {
            return message;
        }
    
        accounts.push(user);
    }

    localStorage.setItem('accounts', JSON.stringify(accounts));

    return 'cadastrado';
}

function login(email, password) { }

export { login, register };
