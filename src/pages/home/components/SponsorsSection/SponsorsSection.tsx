import { useInView } from "react-intersection-observer";
import AutoplayCarousel from "../../../../components/Carrusel/AutoplayCarousel";
import "./SponsorsSection.css";
import { useSpring, animated } from "@react-spring/web";

const SponsorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInFromLeft = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(-100%,0,0)",
    },
    config: { duration: 2000 }, // Configure the duration of the animation
  });

  return (
    <section ref={ref} className="sponsors-section" id="patrocinadores">
      <div className="sponsors-title">
        <animated.h2 style={fadeInFromLeft}>
          Nuestros Patrocinadores
        </animated.h2>
      </div>
      <div className="sponsors-parrafo">
        <animated.p style={fadeInFromLeft}>
          Estamos muy agradecidos por el enorme aporte de nuestros
          patrocinadores. <b>Su ayuda es fundamental para el refugio.</b>
        </animated.p>
      </div>
      <div className="sponsors-carrusel">
        <AutoplayCarousel />
      </div>
    </section>
  );
};

export default SponsorsSection;
