// Select the element with the class 'nav-toggle', which is typically a button or icon to toggle the navigation menu
const navToggle = document.querySelector('.nav-toggle');

// Select all elements with the class 'nav__link', which are the links in the navigation menu
const navLinks = document.querySelectorAll('.nav__link')

// Add a click event listener to the navToggle element
navToggle.addEventListener('click', () => {
    // Toggle the 'nav-open' class on the body element
    // This class is typically used to show or hide the navigation menu
    document.body.classList.toggle('nav-open');
});

// Loop through each link in the navLinks NodeList
navLinks.forEach(link => {
    // Add a click event listener to each navigation link
    link.addEventListener('click', () => {
        // Remove the 'nav-open' class from the body element when a navigation link is clicked
        // This typically hides the navigation menu
        document.body.classList.remove('nav-open');
    })
})
