function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

// DOMContentLoaded means when the page is fully loaded
function scrollProgress() {
  const scrollProgressEl = document.getElementById('scroll-progress');

  const totalPageHigh = document.body.scrollHeight;
  const currentScrollDistance = document.documentElement.scrollTop;
  const windowHeigh = window.innerHeight;

  const scrollPercentage = (currentScrollDistance / (totalPageHigh - windowHeigh)) * 100;
  console.log('scrollPercentage', Math.round(scrollPercentage));
  scrollProgressEl.style.width = `${Math.round(scrollPercentage)}%`;
}

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('scroll', scrollProgress);
