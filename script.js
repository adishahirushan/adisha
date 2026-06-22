
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
    "Animator",
    "ICT & Maths Educator",
    "Graphic Designer",
    "Software Developer"
];

/* for loading effect */
const loader = document.getElementById("loader");
const progressBar = document.querySelector(".progress-bar");
const percentText = document.getElementById("loading-percent");

let progress1 = 0;

const loading = setInterval(() => {

    progress1++;

    progressBar.style.width = progress1 + "%";
    percentText.innerText = progress1 + "%";

    if(progress1 >= 100){

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

const sections = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  if (!current) {
    document.querySelector('#navbar a[href="#Home"]').classList.add("active");
  }
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


// Always start at the top when page reloads
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    const elements = document.querySelectorAll(".page");

    elements.forEach((el) => {
        if (el.id === "Home") {
            // Home section visible immediately
            el.classList.add("show");
        } else {
            observer.observe(el);
        }
    });

});

    function filterProjects(category) {
      const cards = document.querySelectorAll('.project-card');
      const buttons = document.querySelectorAll('.filter-bar button');

      // Update active button
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      // Show/hide projects
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }
        
    /* Reveal Animation */
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold:0.2
    });

    items.forEach(item=>{
        observer.observe(item);
    });

    /* Timeline Progress Line */
    const timeline = document.querySelector(".timeline");
    const progress = document.querySelector(".timeline-progress");

    window.addEventListener("scroll",()=>{

        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let percentage =
        ((windowHeight - rect.top) / timeline.offsetHeight) * 100;

        percentage = Math.max(0, Math.min(100, percentage));

        progress.style.height = percentage + "%";
    });

    const toggleBtn = document.getElementById("modeToggle");

    toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
    });

    const toggleBtn1 = document.getElementById("modeTogglemob");

    toggleBtn1.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn1.textContent = "Switch to Light Mode";
    } else {
        toggleBtn1.textContent = "Switch to Dark Mode";
    }
    });

if (window.devicePixelRatio === 1.25) {
  document.body.classList.add("scale-125");
}