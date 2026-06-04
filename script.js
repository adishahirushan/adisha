const cursor = document.querySelector(".cursor-dot");

// Follow mouse 
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Text elements
document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("text-hover");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("text-hover");
    });
});

// Inputs & textareas
document.querySelectorAll("input, textarea").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("input-hover");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("input-hover");
    });
});

  const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    // Move custom cursor
    cursorDot.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';

    // Detect hovered element
    const el = document.elementFromPoint(e.clientX, e.clientY);

    cursorDot.classList.remove('zoom', 'text');

    if (
      el.matches('a, button, [role="button"]')
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