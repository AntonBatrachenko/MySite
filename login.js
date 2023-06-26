window.onload = function () {
    // Отримання об'єкта користувача з локального сховища
    var user = JSON.parse(localStorage.getItem('user'));

    // Зміна тексту на кнопці головної сторінки в залежності від наявності збереженого користувача
    var loginBtn = document.getElementById('loginBtn');
    if (user) {
        loginBtn.textContent = 'Логін: ' + user.username;
    } else {
        loginBtn.textContent = 'Увійти';
    }
};