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

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");

        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);

    }, 2000); // durasi loading
});

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");
    const app = document.querySelector(".app");

    setTimeout(() => {

        preloader.classList.add("hide");

        setTimeout(() => {
            preloader.style.display = "none";

            // 🔥 delay kecil untuk stabilisasi layout
            requestAnimationFrame(() => {
                app.classList.add("ready");
            });

        }, 600);

    }, 2000);

});

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");
    const app = document.querySelector(".app");

    setTimeout(() => {

        // 1. tutup loading
        preloader.classList.add("hide");

        setTimeout(() => {
            preloader.style.display = "none";

            // 2. TV FADE IN
            app.classList.add("ready");

            // 3. setelah TV selesai sedikit → mulai animasi konten
            setTimeout(() => {
                app.classList.add("play");
            }, 1200); // sama dengan duration fade-in

        }, 600);

    }, 2000);

});

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    const app = document.querySelector(".app");

    setTimeout(() => {

        // sembunyikan preloader
        preloader.classList.add("hide");

        setTimeout(() => {
            // munculkan app (fade in)
            app.classList.add("ready");

            setTimeout(() => {
                // baru jalankan animasi isi
                app.classList.add("play");
            }, 600); // delay animasi konten

        }, 400); // delay setelah preloader hilang

    }, 2000); // sesuai loading bar kamu
});