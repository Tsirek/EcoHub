document.addEventListener("DOMContentLoaded", function() {
    updateAuthButton();
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function login() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loginInput = document.getElementById("loginInput").value;
    const passwordInput = document.getElementById("passwordInput").value;

    const user = users.find(user => user.username === loginInput && user.password === passwordInput);
    if (user) {
        alert("Вы успешно авторизованы!");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        updateAuthButton();
        hidePopup(); // Закрываем форму регистрации
    } else {
        alert("Неправильное имя пользователя или пароль.");
    }
}

function registerAndLogin() {
    const registerLoginInput = document.getElementById("registerLoginInput").value;
    const registerPasswordInput = document.getElementById("registerPasswordInput").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { username: registerLoginInput, password: registerPasswordInput };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    updateAuthButton();
}

function updateAuthButton() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const authButtonContainer = document.getElementById("authButton");
    if (isLoggedIn) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        authButtonContainer.innerHTML = `<span>Добро пожаловать, ${currentUser.username}!</span>`;
    } else {
        authButtonContainer.innerHTML = `<button class="auth-btn" onclick="showPopup()">Авторизация</button>`;
    }

    // Добавляем обновление кнопки на главной странице
    const mainAuthButtonContainer = document.getElementById("mainAuthButton");
    if (isLoggedIn) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        mainAuthButtonContainer.innerHTML = `<span>${currentUser.username}</span>`;
    } else {
        mainAuthButtonContainer.innerHTML = `<button class="auth-btn" onclick="showPopup()">Авторизация</button>`;
    }
}
