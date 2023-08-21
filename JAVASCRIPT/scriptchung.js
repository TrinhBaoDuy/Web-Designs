const header = document.querySelector('header');
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
  const headerHeight = header.offsetHeight;
  const footerTop = footer.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY + headerHeight > footerTop) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});
$(window).scrollY