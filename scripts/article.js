var tl = gsap.timeline();
gsap.from("#img1", {
  opacity: 1,
  x: -100,
  duration: 1,
  scrollTrigger: "#img1",
});
gsap.from("#img2", {
  opacity: 1,
  duration: 1,
  x: 100,
  scrollTrigger: "#img2",
});
gsap.from("#img3", {
  opacity: 1,
  duration: 1,
  x: -100,
  scrollTrigger: "#img3",
});
