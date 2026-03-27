// Ember particle spawner
(function () {
    const body = document.body;
    function spawnEmber() {
        const el = document.createElement('div');
        el.style.cssText = `
            position: fixed;
            bottom: 0;
            left: ${Math.random() * 100}%;
            width: ${1.5 + Math.random() * 2.5}px;
            height: ${1.5 + Math.random() * 2.5}px;
            border-radius: 50%;
            background: ${Math.random() > 0.6 ? '#f5a623' : '#c84b11'};
            pointer-events: none;
            z-index: 999;
            animation: emberRise ${2.5 + Math.random() * 3}s linear forwards;
            animation-delay: ${Math.random() * 1}s;
        `;
        body.appendChild(el);
        setTimeout(() => el.remove(), 6000);
    }
    setInterval(spawnEmber, 300);
})();