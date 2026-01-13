// Navbar Toggle alert
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Navigating to ${link.textContent}`);
  });
});

// Modal Trip Booking Alert
function LKbookTrip() {
  alert("Your trip booking has been received! We will contact you soon.");
  const modalEl = document.getElementById('LKModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
}

// Contact Form Validation
document.getElementById('LK-contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if(name && email && message){
    alert("Thank you! Your message has been sent.");
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// Carousel Automatic
const carouselEl = document.querySelector('.carousel');
if(carouselEl){
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: 3000,
    wrap: true
  });
}
