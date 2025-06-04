
    const design = document.querySelectorAll('.design');
    design.forEach(q => {
      q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
      });
    });
  

  function highlight(element) {
    element.style.color = "orange";
  }

  function removeHighlight(element) {
    element.style.color = "white";
  }
