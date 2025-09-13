(() => {
    const counterEl = document.querySelector('[data-counter-value]');
    const buttonEl = document.querySelector('[data-counter-button]');

    if (!counterEl || !buttonEl) return;

    let count = 0;

    const render = () => {
        counterEl.textContent = String(count);
    };

    buttonEl.addEventListener('click', () => {
        count++;
        render();
    });

    render();
})();