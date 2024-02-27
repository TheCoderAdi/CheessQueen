var tl = gsap.timeline();

tl.from(".hero-image", {
  opacity: 0,
  duration: 1,
  delay: 0.6,
  scale: 1,
  x: -100,
});

gsap.from(".left__container", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: ".left__container",
});
gsap.from(".right__container", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: ".right__container",
});
