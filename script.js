// Contact form logic
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // fake send animation
  setTimeout(() => {
    form.reset();
    successMsg.classList.remove("hidden");
  }, 1000);
});


// Scroll progress bar
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (scroll / height) * 100;

  document.body.style.setProperty("--scroll", percent + "%");
});
