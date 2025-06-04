$(document).ready(function() {
    // Slideshow
    let currentSlide = 0;
    const slides = $('.slide');
    
    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }
    setInterval(nextSlide, 4000);

    // Login Form Submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const userid = $('#userid').val();
        const password = $('#password').val();
        if (userid && password) {
            alert('Login successful! Welcome back!');
            window.location.href = 'clubs.html';
        }
    });

    // Signup Form Submission
    $('#signupForm').submit(function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const userid = $('#userid').val();
        const password = $('#password').val();
        const club = $('#club').val();
        if (name && userid && password && club) {
            alert(`Welcome, ${name}! You've joined ${club.toUpperCase()}.`);
            window.location.href = 'login.html';
        }
    });

    // Smooth Scroll for Links
    $('a[href*="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });
});