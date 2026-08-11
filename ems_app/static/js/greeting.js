document.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.querySelector('#greeting');
    const subEl = document.querySelector('#greeting_sub');

    if (!greetingEl) return;

    const name = greetingEl.dataset.name || 'Operator';

    const hour = new Date().getHours();

    let greeting;
    let message;
    if (hour < 12) {
        greeting = 'Good morning';
        message = 'The yard is fresh — let\u2019s get the equipment moving.';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
        message = 'Midday check — keep the loans and returns on track.';
    } else {
        greeting = 'Good evening';
        message = 'Winding down — review what\u2019s still out before you log off.';
    }

    greetingEl.textContent = greeting + ', ' + name;
    if (subEl) subEl.textContent = message;
});
