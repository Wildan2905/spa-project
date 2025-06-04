//Navbar Section
// toggle clss active

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

//About Section
document.addEventListener("DOMContentLoaded", function () {
  const aboutImg = document.querySelector(".about-img");
  const aboutContent = document.querySelector(".about .content");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
      } else {
        entry.target.classList.remove("animate-visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (aboutImg) {
    observer.observe(aboutImg);
  }
  if (aboutContent) {
    observer.observe(aboutContent);
  }
});
