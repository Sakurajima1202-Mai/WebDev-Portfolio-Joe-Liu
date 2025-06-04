//Back to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
}

// expand/hide
const design = document.querySelectorAll('.design');
design.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// doing the feedback
  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      document.getElementById('feedback-thankyou').style.display = 'block';
    });
  }
});

// Play the music
document.addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  if (audio) audio.play();
}, { once: true });