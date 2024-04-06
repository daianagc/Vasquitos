export const fadeInAboveAnimation = (inView: boolean) => ({
  from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
  to: {
    opacity: inView ? 1 : 0,
    transform: inView ? "translate3d(0%,0,0)" : "translate3d(0,-100%,0)",
  },
  config: { duration: 2000 }, // Configure the duration of the animation
});
