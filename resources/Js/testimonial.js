const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial() {
    testimonials.forEach((testimonial) => {
        testimonial.classList.remove('fade-in', 'slide-in', 'slide-out');
        testimonial.classList.add('fade-out', 'slide-out');
    });

    setTimeout(() => {
        testimonials.forEach((testimonial) => {
            testimonial.style.display = 'none';
            testimonial.classList.remove('fade-out', 'slide-out');
        });

        testimonials[index].style.display = 'block';
        testimonials[index].classList.add('slide-in');

        setTimeout(() => {
            testimonials[index].classList.remove('slide-in');
            testimonials[index].classList.add('fade-in');
        }, 500); // Adjust the time for the slide-in animation

        index = (index + 1) % testimonials.length;
    }, 500); // Adjust the time for the fade-out animation
    testimonials[index].style.transform = 'translateX(0)'; // Slide in
}

// Show the first testimonial initially
showTestimonial();

// Automatically switch testimonials every 5 seconds
setInterval(showTestimonial, 5000);