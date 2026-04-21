// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to');

if (nama) {
  document.getElementById("namaTamu").innerText = nama;
}

// Fungsi buka undangan
function bukaUndangan() {
  document.body.style.overflow = "auto";
  alert("Masuk ke halaman utama (next step nanti kita buat)");
}

const container = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");

  // posisi random
  p.style.top = Math.random() * 100 + "%";
  p.style.left = Math.random() * 100 + "%";

  // ukuran random
  const size = Math.random() * 6 + 3;
  p.style.width = size + "px";
  p.style.height = size + "px";

  // opacity random
  p.style.opacity = Math.random() * 0.6 + 0.2;

  // animasi random
  p.style.animationDuration = (Math.random() * 10 + 10) + "s";

  container.appendChild(p);
}


const startScreen = document.getElementById("startScreen");
const bgm = document.getElementById("bgm");

function startExperience() {
  startScreen.style.display = "none";

  bgm.volume = 0;

  bgm.play().then(() => {
    let v = 0;

    const fade = setInterval(() => {
      if (v < 0.4) {
        v += 0.02;
        bgm.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 80);
  });

  // biar hanya sekali jalan
  window.removeEventListener("keydown", handleKey);
}

function handleKey(e) {
  if (e.key === "Enter") {
    startExperience();
  }
}

window.addEventListener("keydown", handleKey);