
/******************************************************
 *  2. JavaScript for Infinite Train-Style Carousel   *
 ******************************************************/

const track = document.querySelector(".slides-track-banner");
const slides = document.querySelectorAll(".slide-banner");
const totalSlides = slides.length;

// Clone the first slide and append to the end
const firstSlideClone = slides[0].cloneNode(true);
track.appendChild(firstSlideClone);

// Now we have totalSlides + 1 “.slide” elements in the DOM
// (e.g., if totalSlides=3, we have 4 in the track)

let currentIndex = 0; // which slide index is visible

// Helper function to move the track to show the slide at currentIndex
function showSlide(index) {
    track.style.transition = "transform 1s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Automatic sliding
function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);

// Transition end event to reset when reaching the cloned slide
track.addEventListener("transitionend", () => {
    // If we've just slid to the cloned slide (which is index == totalSlides),
    // instantly jump back to the real first slide (index=0) 
    // without a visible transition.
    if (currentIndex === totalSlides) {
    // Turn off transition, jump to original
    track.style.transition = "none";
    currentIndex = 0;
    track.style.transform = `translateX(0)`;
    }
});

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
