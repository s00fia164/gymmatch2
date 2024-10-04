// Prosty algorytm symulujący "swipe left" i "swipe right"
let currentImageIndex = 0;
const images = document.querySelectorAll('.swiper-container img');

document.getElementById('like').addEventListener('click', function() {
    swipeImage('like');
});

document.getElementById('dislike').addEventListener('click', function() {
    swipeImage('dislike');
});

function swipeImage(action) {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}
