'use strict';
window.addEventListener('load', function () {

    const BASE_URL = 'http://localhost:8000';

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', onLoginHandler);

    function onLoginHandler(e) {
        e.preventDefault();
        const form = e.target;
        const userFormData = new FormData(form);
        const user = Object.fromEntries(userFormData);
        saveUser(user);
        fetchAuthorised(BASE_URL + '/getPosts')
    }
    console.log(localStorage);

    function fetchAuthorised(url, options) {
        const settings = options || {}
        return fetch(url, updateOptions(settings)).then(r => r.json()).then(data => {console.log(data)}).then(data =>  {window.location.href = "http://localhost:8000/index"});
    }

    function updateOptions(options) {
        const update = { ...options };
        update.mode = 'cors';
        update.headers = { ... options.headers };
        update.headers['Content-Type'] = 'application/json';
        const user = restoreUser();
        if(user) {
            update.headers['Authorization'] = 'Basic ' + btoa(user.username + ':' + user.password);
        }
        return update;
    }

    function saveUser(user) {
        const userAsJSON = JSON.stringify(user)
        localStorage.setItem('user', userAsJSON);
    }

    function restoreUser() {
        const userAsJSON = localStorage.getItem('user');
        const user = JSON.parse(userAsJSON);
        return user;
    }


});
