document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('literatureDarkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-theme');
        updateThemeUI(true);
    }
});

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('literatureDarkMode', isDark);
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (icon && text) {
        icon.textContent = isDark ? '☀️' : '🌙';
        text.textContent = isDark ? 'الوضع النهاري' : 'الوضع الليلي';
    }
}

function selectTrack(trackDetail) {
    localStorage.setItem('selectedLiteratureTrack', trackDetail);
    alert(`🎉 تم حفظ اختيارك لـ (${trackDetail}) بنجاح!`);
}