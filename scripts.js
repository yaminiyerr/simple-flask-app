document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const response = document.getElementById('responseMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    response.innerHTML = '<div class="alert alert-success">Thanks! Message sent.</div>';
    form.reset();

    setTimeout(() => {
      response.innerHTML = '';
    }, 4000);
  });
});
