/**--------------------------------------------------------------------------
    Hamburger Animation
--------------------------------------------------------------------------**/
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const offcanvasEl = document.getElementById('offcanvasDarkNavbar');

  if (!toggler || !offcanvasEl) return;

  toggler.addEventListener('click', () => {
    toggler.classList.toggle('open');
  });

  offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
    toggler.classList.remove('open');
  });

  offcanvasEl.addEventListener('shown.bs.offcanvas', () => {
    toggler.classList.add('open');
  });
});



/**--------------------------------------------------------------------------
    AOS - Scroll Animation
--------------------------------------------------------------------------**/
AOS.init();

AOS.init({
    duration: 600, // animation duration in ms
    once: false     // only animate once
});


/**--------------------------------------------------------------------------
    Navbar Unhide and Hide
--------------------------------------------------------------------------**/
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // scrolling down
    navbar.classList.add('hidden');
  } else {
    // scrolling up
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // avoid negative scroll
});




/**--------------------------------------------------------------------------
    Navbar Scroll 
--------------------------------------------------------------------------**/
  document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");

  function handleScroll() {
  if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent", "navbar-dark");
      navbar.classList.add("navbar-scroll");
  } else {
      navbar.classList.remove("navbar-scroll");
      navbar.classList.add("bg-transparent", "navbar-dark");
  }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load in case the page isn't at the top
  });


  document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasDarkNavbar");
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", function () {
      offcanvas.hide(); // Close the offcanvas
    });
  });
});


/**--------------------------------------------------------------------------
    Hero SkillSet Text Animation
--------------------------------------------------------------------------**/
 const words = [
  "a Freelancer",
  "a UI/UX Designer",
  "a Data Analyst",
  "a Frontend Developer",
  "an IT Support Admin."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // typing speed
const pause = 1500; // pause between words
const element = document.getElementById("typed-text");

function typeEffect() {
  const current = words[wordIndex];
  if (isDeleting) {
  element.textContent = current.substring(0, charIndex--);
  } else {
  element.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
  setTimeout(() => isDeleting = true, pause);
  } else if (isDeleting && charIndex === 0) {
  isDeleting = false;
  wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();


/**--------------------------------------------------------------------------
    Truncate Text
--------------------------------------------------------------------------**/
// Truncate,click to read more
const toggleBtn = document.getElementById("toggleBtn");
const textContent = document.getElementById("textContent");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  textContent.classList.toggle("expanded");
  
  if (textContent.classList.contains("expanded")) {
    toggleBtn.textContent = "Show less";
  } else {
    toggleBtn.textContent = "Read more...";
  }
});


/**--------------------------------------------------------------------------
    Testimonials slider
--------------------------------------------------------------------------**/
const carousel = document.getElementById('carousel');
const indicators = document.getElementById('indicators').children;
const totalSlides = carousel.children.length;
let currentIndex = 0;

function updateIndicators(index) {
  Array.from(indicators).forEach((dot, i) => {
    dot.className = i === index ? 'active' : '';
  });
}

function showSlide(index) {
  const offset = index * -100;
  carousel.style.transform = `translateX(${offset}%)`;
  updateIndicators(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto-loop every 10 seconds
setInterval(nextSlide, 10000);
showSlide(currentIndex);


/**--------------------------------------------------------------------------
    Click outside to close image
--------------------------------------------------------------------------**/
const lightbox = GLightbox({
  selector: '.glightbox',
  closeOnOutsideClick: true, // This enables closing when clicking outside
  touchNavigation: true,
  loop: true
});


/**--------------------------------------------------------------------------
    Portfolio nav filter
--------------------------------------------------------------------------**/
// Initialize Isotope
const iso = new Isotope('.isotope-container', {
    itemSelector: '.isotope-item',
    layoutMode: 'masonry',
    filter: '*'
});

// Filter buttons
const filterButtons = document.querySelectorAll('.portfolio-filters li');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
    // Remove active class
    filterButtons.forEach(b => b.classList.remove('filter-active'));
    this.classList.add('filter-active');

    // Filter items
    const filterValue = this.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
    });
});


/**--------------------------------------------------------------------------
    Form Submission
--------------------------------------------------------------------------**/

