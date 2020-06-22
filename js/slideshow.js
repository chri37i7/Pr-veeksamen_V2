// Slide index counter
var slideIndex = 1;

// Run function
showSlides(slideIndex);

// Function to show the different slider images
function showSlides(n) {
    // Counter
    var i;

    // Image slides
    var slides = document.getElementsByClassName("mySlides");

    // If the number is higher than the slide index length,
    // Set the index to the first image
    if (n > slides.length) { slideIndex = 1 }
    // If the number is lower than 1,
    // Set the slideindex to the last image
    if (n < 1) { slideIndex = slides.length }
    // Hide each slider image
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Show the image in the specified index
    slides[slideIndex - 1].style.display = "block";
}

// Set timer
setInterval(() => {
    showSlides(slideIndex += 1)
}, 5000);