let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

function pilihPaket(button) {
  const card = button.parentElement;
  const hari = card.dataset.paket;
  const harga = card.dataset.harga;
  const profit = card.dataset.profit;
  window.location.href = `checkout.html?hari=${hari}&harga=${harga}&profit=${profit}`;
}
