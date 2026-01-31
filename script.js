
// Auto image slider
document.querySelectorAll('.slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, slider.dataset.delay || 4000);
});

// WhatsApp form integration
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const msg = document.getElementById('message').value;
  const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${msg}`;
  window.open(`https://wa.me/27609606081?text=${text}`, '_blank');
});
