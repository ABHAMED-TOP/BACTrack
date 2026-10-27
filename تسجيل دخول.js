
function togglePassword() {
    const passInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-btn');

    if (passInput.type === 'password') {
        passInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

function handleLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const userError = document.getElementById('userError');
    const passError = document.getElementById('passError');
    const submitBtn = document.getElementById('submitBtn');

    userError.textContent = '';
    passError.textContent = '';

    let isValid = true;

    
    if (usernameInput.value.trim() === '') {
        userError.textContent = 'يرجى كتابة اسم الطالب بالكامل!';
        usernameInput.style.borderColor = '#ee5d50';
        isValid = false;
    } else {
        usernameInput.style.borderColor = '#e0e5f2';
    }

    
    if (passwordInput.value.length < 4) {
        passError.textContent = 'كلمة السر يجب أن تكون 4 خانات على الأقل!';
        passwordInput.style.borderColor = '#ee5d50';
        isValid = false;
    } else {
        passwordInput.style.borderColor = '#e0e5f2';
    }

    
    if (isValid) {
        submitBtn.textContent = 'جاري التسجيل... ⏳';
        submitBtn.style.opacity = '0.8';

        localStorage.setItem('studentName', usernameInput.value);

        setTimeout(() => {
            window.location.href = 'واجه.html';
        }, 800);
    }
    if(isValid){
        window.location.href ="واجه.html"
    }
}