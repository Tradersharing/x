
// Carousel Gambar Sederhana (jika ada elemen dengan id 'carousel')
let slideIndex = 0;
function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  if (slides.length === 0) return;

  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}
showSlides();

// Tombol login dan daftar dummy
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("#loginBtn");
  const registerBtn = document.querySelector("#registerBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("Fungsi login akan diaktifkan nanti.");
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      alert("Fungsi daftar akan diaktifkan nanti.");
    });
  }
});
