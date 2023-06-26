function registerUser() {
    // Отримання значень полів форми
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Створення об'єкта, що містить інформацію про користувача
    var user = {
        username: username,
        password: password
    };

    // Збереження об'єкта користувача у локальне сховище браузера
    localStorage.setItem('user', JSON.stringify(user));

    // Перехід на головну сторінку
    window.location.href = 'index.html';
}

function loginUser() {
    // Отримання значень полів форми
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Отримання об'єкта користувача з локального сховища
    var user = JSON.parse(localStorage.getItem('user'));

    // Перевірка, чи збережений користувач співпадає з введеними даними
    if (user && username === user.username && password === user.password) {
        // Перехід на головну сторінку
        window.location.href = 'index.html';
    } else {
        alert('Неправильний логін або пароль');
    }
}