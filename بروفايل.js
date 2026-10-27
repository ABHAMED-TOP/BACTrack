document.addEventListener('DOMContentLoaded', () => {
    let isDark = localStorage.getItem('profileDarkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-theme');
        updateThemeUI(true);
    }

    loadUserData();
    checkTodayAttendanceStatus();
});

function toggleTheme() {
    let isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('profileDarkMode', isDark);
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    let icon = document.getElementById('themeIcon');
    let text = document.getElementById('themeText');
    if (icon && text) {
        icon.textContent = isDark ? '☀️' : '🌙';
        text.textContent = isDark ? 'الوضع النهاري' : 'الوضع الليلي';
    }
}

function loadUserData() {
    let totalDays = 189;       
    let totalRatingsMax = 37;

    let attendedDays = parseInt(localStorage.getItem('userAttendedDays')) || 0;
    let ratingCount = parseInt(localStorage.getItem('userRatingCount')) || 0;

    
    let attendancePercent = totalDays > 0 ? ((attendedDays / totalDays) * 100).toFixed(1) : 0;
    let ratingPercent = totalRatingsMax > 0 ? ((ratingCount / totalRatingsMax) * 100).toFixed(1) : 0;


    document.getElementById('attendedDays').textContent = `${attendedDays} / ${totalDays}`;
    document.getElementById('attendanceRate').textContent = `${attendancePercent}%`;
    document.getElementById('attendanceProgress').style.width = `${attendancePercent}%`;

    
    document.getElementById('totalRatings').textContent = `${ratingCount} / ${totalRatingsMax}`;
    document.getElementById('ratingPercentage').textContent = `${ratingPercent}%`;
    document.getElementById('ratingProgress').style.width = `${ratingPercent}%`;
}

function checkTodayAttendanceStatus() {
    let todayDate = new Date().toISOString().split('T')[0];
    let lastAttendanceDate = localStorage.getItem('lastAttendanceDate');
    let btn = document.getElementById('checkInBtn');

    if (btn && lastAttendanceDate === todayDate) {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.style.cursor = 'not-allowed';
        btn.textContent = '🎉 تم تسجيل حضورك اليوم';
    }
}

function registerTodayAttendance() {
    let todayDate = new Date().toISOString().split('T')[0];
    let lastAttendanceDate = localStorage.getItem('lastAttendanceDate');

    if (lastAttendanceDate !== todayDate) {
        let currentAttended = parseInt(localStorage.getItem('userAttendedDays')) || 0;
        localStorage.setItem('userAttendedDays', currentAttended + 1);
        localStorage.setItem('lastAttendanceDate', todayDate);

        loadUserData();
        checkTodayAttendanceStatus();
        alert('✅ تم تسجيل حضورك اليوم بنجاح!');
    }
}

function addNewRating() {
    let currentCount = parseInt(localStorage.getItem('userRatingCount')) || 0;
    if (currentCount < 37) {
        localStorage.setItem('userRatingCount', currentCount + 1);
        loadUserData();
        alert('⭐ تم إضافة تقييم جديد!');
    } else {
        alert('اكتملت جميع التقييمات (37 / 37)');
    }
}