
document.addEventListener('DOMContentLoaded', () => {
    
    const savedName = localStorage.getItem('studentName');
    if (savedName) {
        document.getElementById('welcomeTitle').textContent = `مرحباً بك يا ${savedName} 👋`;
    }

    
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-theme');
        updateThemeBtn(true);
    }
});


function toggleTheme() {
    const isDarkNow = document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkMode', isDarkNow);
    updateThemeBtn(isDarkNow);
}


function updateThemeBtn(isDark) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');

    if (isDark) {
        icon.textContent = '☀️';
        text.textContent = 'الوضع النهاري';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'الوضع الليلي';
    }
}

function selectTrack(trackName) {
    localStorage.setItem('selectedTrack', trackName);
    
    if (trackName === 'هندسة وتكنولوجيا') {
        window.location.href = 'engineering.html';
    } else if (trackName === 'علوم وطب') {
        window.location.href = 'medical.html';
    } else if (trackName === 'أعمال وإدارة') {
        window.location.href = 'business.html';
    } else if (trackName === 'آداب ولغات') {
        window.location.href = 'arts.html';
    }
}