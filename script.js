document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // 🚨 HARD RESET STATE
    // ======================
    window.scrollTo(0, 0);

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    // ======================
    // 🔒 LOCK SCROLL DEFAULT
    // ======================
    document.body.classList.add("locked");

    // ======================
    // ELEMENTS
    // ======================
    const progress = document.querySelector(".progress");
    const loadingScreen = document.getElementById("loading-screen");
    const openBtn = document.querySelector(".open-btn");
    const quoteSection = document.querySelector(".quote-section");

    // ======================
    // LOADING
    // ======================
    if (progress && loadingScreen) {

        let width = 0;

        let interval = setInterval(() => {
            width++;
            progress.style.width = width + "%";

            if (width >= 100) {
                clearInterval(interval);

                setTimeout(() => {

                    loadingScreen.style.opacity = "0";
                    loadingScreen.style.transition = "0.5s";

                    setTimeout(() => {
                        loadingScreen.style.display = "none";
                        document.body.classList.add("start");

                    }, 500);

                }, 200);
            }

        }, 20);
    }

    // ======================
    // OPEN BUTTON (FIX SCROLL DEKAT)
    // ======================
    if (openBtn && quoteSection) {

        openBtn.addEventListener("click", () => {

            document.body.classList.remove("locked");

            window.scrollTo(0, 0);

            setTimeout(() => {

                // 🔥 FIX UTAMA: lebih dekat & natural
                const top = quoteSection.offsetTop;

                window.scrollTo({
                    top: top - 200,   // 🔥 kecilkan offset (ini kunci)
                    behavior: "smooth"
                });

            }, 120);

        });

    }

    // ======================
    // PROFILE REVEAL
    // ======================
    const profileSections = document.querySelectorAll(".profile-section");

    if (profileSections.length > 0) {

        window.addEventListener("scroll", () => {

            profileSections.forEach(section => {

                const rect = section.getBoundingClientRect();

                if (rect.top < window.innerHeight * 0.85) {
                    section.classList.add("show");
                }

            });

        });

    }

});

const targetDate = new Date("June 28, 2026 09:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d && h && m && s) {
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
    }

    if (distance < 0) {
        clearInterval(countdown);
    }

}, 1000);

const galleryItems = document.querySelectorAll(".gallery-item");

window.addEventListener("scroll", () => {

    galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.9) {
            item.classList.add("show");
        }
    });

});

const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const sendComment = document.getElementById("sendComment");
const commentList = document.getElementById("commentList");

// load komentar saat buka web
window.addEventListener("load", loadComments);

sendComment.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) return;

    const comment = {
        name,
        message,
        time: new Date().toLocaleString()
    };

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.unshift(comment);

    localStorage.setItem("comments", JSON.stringify(comments));

    nameInput.value = "";
    messageInput.value = "";

    loadComments();
});

function loadComments() {

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    commentList.innerHTML = "";

    comments.forEach(c => {

        const div = document.createElement("div");
        div.classList.add("comment-item");

        div.innerHTML = `
            <h4>${c.name}</h4>
            <p>${c.message}</p>
        `;

        commentList.appendChild(div);
    });

}

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("lightboxClose");

    // ======================
    // OPEN LIGHTBOX
    // ======================
    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("show");
            lightboxImg.src = img.src;
        });
    });

    // ======================
    // CLOSE BUTTON
    // ======================
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    // ======================
    // CLICK OUTSIDE IMAGE
    // ======================
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
        }
    });

});