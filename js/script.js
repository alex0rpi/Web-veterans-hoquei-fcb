const navbar = document.querySelector('.navbar');
function userScroll() {
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
  scrollProgressEl.style.width = `${Math.round(scrollPercentage)}%`;
}

// Make a dark dropdown appear event if we're at the top of the page.
const toggleButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('scroll', scrollProgress);
toggleButton.addEventListener('click', () => {
  if (!navbar.classList.contains('bg-dark')) {
    navbarCollapse.classList.add('bg-dark');
  }
});

// Make the dropdown disappear when clicking outside of it
navbarCollapse.addEventListener('show.bs.collapse', () => {
  // This is a flag indicating the dropdown is opened
  window.dropdownOpened = true;

  // Add a click event listener to the document to close the dropdown when clicked outside
  document.addEventListener('click', handleClickOutsideDropdown);
});

// Detect when the dropdown is closed
navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  // Set the flag to false as dropdown is now closed
  window.dropdownOpened = false;

  // Remove the event listener as we no longer need to check for clicks outside
  document.removeEventListener('click', handleClickOutsideDropdown);
});

function handleClickOutsideDropdown(event) {
  // If the dropdown is open and the click is not within the dropdown or the toggle button
  if (
    window.dropdownOpened &&
    !navbarCollapse.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    // Simulate a click on the toggle button
    toggleButton.click();
  }
}
