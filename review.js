document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    let currentIndex = 0;
  
    function showSlide(index) {
        boxes.forEach((box, idx) => {
            if (idx === index) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    }
  
    showSlide(currentIndex);
  
    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
        showSlide(currentIndex);
    });
  
    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % boxes.length;
        showSlide(currentIndex);
    });
  });
