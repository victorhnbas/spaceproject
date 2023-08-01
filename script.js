ScrollReveal({ reset: true });

ScrollReveal().reveal(".effect", {
  duration: 900,
  origin: "top",
  distance: "100px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".effect2", {
  duration:900,
  origin:"top",
  distance:"100px",
  easing:"ease-in-out",
}
)

ScrollReveal().reveal(".scroll", {
  duration:900,
  origin:"bottom",
  distance:"100px",
  easing:"ease-in-out",
}
)

const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
});

