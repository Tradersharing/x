document.addEventListener('DOMContentLoaded', () => {
  // Gambar slide otomatis
  const slides = document.querySelectorAll('.slide');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);

  // Modal Login
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');

  loginBtn.onclick = () => loginModal.style.display = 'block';
  closeModal.onclick = () => loginModal.style.display = 'none';

  window.onclick = (e) => {
    if (e.target == loginModal) {
      loginModal.style.display = 'none';
    }
  };

  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login berhasil (simulasi).');
    loginModal.style.display = 'none';
  });
});
