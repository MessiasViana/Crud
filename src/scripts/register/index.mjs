import accounts from '../../global/user-list.mjs';
import { login, register } from '../../controller/userController.mjs';

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnRegister = document.getElementById('register');

btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const rawResponse = register(name.value, email.value, password.value);

    if (rawResponse !== 'cadastrado') {
        alert(rawResponse);
    } else {
        alert('Cadastrado com sucesso!');
    }
});

console.log(accounts)