document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.due-badge');

    if (badges.length === 0) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    badges.forEach((badge) => {
        const due = new Date(badge.dataset.due);

        const oneDay = 1000 * 60 * 60 * 24;
        const daysLeft = Math.round((due - today) / oneDay);

        if (daysLeft < 0) {
            badge.textContent = 'OVERDUE';
            badge.style.color = '#842424'; // oxblood — danger
        } else if (daysLeft === 0) {
            badge.textContent = 'Due today';
            badge.style.color = '#654505'; // mustard — warning
        } else {
            badge.textContent = daysLeft + ' day(s) left';
            badge.style.color = '#654505'; // mustard — warning
        }
    });
});
