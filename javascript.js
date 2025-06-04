
    const design = document.querySelectorAll('.design');
    design.forEach(q => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      });
    });
  


/*Define the button which can move to the top*/
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
}


  /*Describe the feedback part*/
  document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('feedback-form').reset();
    document.getElementById('feedback-thankyou').style.display = 'block';
  });

  document.addEventListener('click', function () {
    const audio = document.getElementById('bg-music');
    audio.play();
  }, { once: true }); 