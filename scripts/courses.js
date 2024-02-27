var tl = gsap.timeline();

tl.from("#card1", {
  duration: 1,
  opacity: 0,
  x: -100,
});
tl.from("#card2", {
  duration: 1,
  opacity: 0,
  y: -50,
});
tl.from("#card3", {
  duration: 1,
  opacity: 0,
  x: 100,
});
