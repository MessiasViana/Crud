import { login } from '../../controller/userController.mjs';

const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    login(email.value, password.value);
})

