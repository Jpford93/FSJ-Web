const skipLink = document.getElementById('skip-link');

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '10px';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});