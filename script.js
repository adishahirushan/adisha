
const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    // Move custom cursor
    cursorDot.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';

    // Detect hovered element
    const el = document.elementFromPoint(e.clientX, e.clientY);

    cursorDot.classList.remove('zoom', 'text');

    if (
      el.matches('a,p, button,.menu-btn, [role="button"]')
    ) {
      cursorDot.classList.add('zoom');
    } else if (
      el.matches('input, textarea, [contenteditable="true"]')
    ) {
      cursorDot.classList.add('text');
    }
  });


const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    menuBtn.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";
});

const words = [
    "Web Developer",
    "3D Animator",
    "3D Sculptor",
    "Video Editor",
    "VFX artist",
    "Vedio Editer",
    "ICT & Maths Educator",
    "Graphic Designer",
    "Software Developer"
];

/* for loading effect */
const loader = document.getElementById("loader");
const progressBar = document.querySelector(".progress-bar");
const percentText = document.getElementById("loading-percent");

let progress = 0;

const loading = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    percentText.innerText = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        setTimeout(() => {

            loader.classList.add("loader-hide");

            setTimeout(() => {
                loader.style.display = "none";
            },1000);

        },300);

    }

},20);

/*end of loading effect */

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    }
    else{
        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();

function showMobileNav() {
    const nav = document.getElementById("mobile_nav");
    nav.classList.toggle("active");
}

// Close menu when screen becomes desktop size
window.addEventListener("resize", () => {
    const nav = document.getElementById("mobile_nav");

    if (window.innerWidth >= 1400) {
        nav.classList.remove("active");
    }
});

function showMobileNavHide() {
    document.getElementById("mobile_nav").classList.remove("active");
}

/* nav link active here */
const sections = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const sections1 = document.querySelectorAll(".page");
const navLinks1 = document.querySelectorAll("#mobile_nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections1.forEach(section => {
        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks1.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});