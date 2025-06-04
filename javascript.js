
    const design = document.querySelectorAll('.design');
    design.forEach(q => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      });
    });
  


/*Define the button which can move to the top*/
  window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
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