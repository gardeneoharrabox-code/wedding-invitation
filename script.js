// Fireflies
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.fireflies');
    const total = 25;

    for (let i = 0; i < total; i++) {
        const f = document.createElement('span');
        f.classList.add('firefly');

        f.style.top = Math.random() * 100 + "%";
        f.style.left = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 3;
        f.style.width = size + "px";
        f.style.height = size + "px";

        const moveX = (Math.random() - 0.5) * 60;
        const moveY = (Math.random() - 0.5) * 60;

        f.style.setProperty('--x', moveX + "px");
        f.style.setProperty('--y', moveY + "px");

        const fly = Math.random() * 6 + 8;
        const blink = Math.random() * 2 + 2;

        f.style.animationDuration = `${fly}s, ${blink}s`;

        container.appendChild(f);
    }
});

// end fireflies