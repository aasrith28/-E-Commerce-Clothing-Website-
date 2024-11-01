function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const isLoginVisible = loginForm.style.display !== "none";

    loginForm.style.display = isLoginVisible ? "none" : "block";
    registerForm.style.display = isLoginVisible ? "block" : "none";
}

function validateForm(event, type) {
    let fields = [];
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (type === 'login') {
        fields = [
            { value: document.getElementById('username').value, name: 'Username' },
            { value: document.getElementById('password').value, name: 'Password' }
        ];
    } else {
        fields = [
            { value: document.getElementById('registerUsername').value, name: 'Username' },
            { value: document.getElementById('registerEmail').value, name: 'Email' },
            { value: document.getElementById('registerPassword').value, name: 'Password' }
        ];
    }

    for (const field of fields) {
        if (!field.value) {
            event.preventDefault();
            alert(`Please fill in all fields: ${field.name}.`);
            return;
        }
    }

    if (type === 'register' && !emailPattern.test(document.getElementById('registerEmail').value)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => validateForm(event, 'login'));
    }

    if (registerForm) {
        registerForm.style.display = 'none';
        registerForm.addEventListener('submit', (event) => validateForm(event, 'register'));
    }
});
