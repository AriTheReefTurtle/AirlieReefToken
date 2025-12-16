/* --------------------------------------------------
   DARK MODE TOGGLE (Saves preference)
-------------------------------------------------- */
const toggle = document.getElementById("dark-toggle");

if (toggle) {
    // Load saved preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
}

/* --------------------------------------------------
   SCROLL FADE-IN ANIMATIONS
-------------------------------------------------- */
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));

/* --------------------------------------------------
   ANIMATED COUNTERS
-------------------------------------------------- */
const counters = document.querySelectorAll(".counter");

const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    const speed = 50;
    let count = 0;

    const update = () => {
        if (count < target) {
            count += Math.ceil(target / 60);
            el.textContent = count.toLocaleString();
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString();
        }
    };

    update();
};

// Trigger counters when visible
const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    },
    { threshold: 0.4 }
);

counters.forEach(c => counterObserver.observe(c));

/* --------------------------------------------------
   MOBILE NAV MENU
-------------------------------------------------- */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

/* --------------------------------------------------
   PARALLAX HERO EFFECT
-------------------------------------------------- */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    if (hero) {
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.4 + "px";
    }
});

/* --------------------------------------------------
   VIDEO HERO BACKGROUND (Optional)
-------------------------------------------------- */
const video = document.getElementById("hero-video");

if (video) {
    video.play().catch(() => {
        console.log("Autoplay blocked — user interaction required.");
    });
}
