import { useInView } from "react-intersection-observer";
import AutoplayCarousel from "../../../../components/Carrusel/AutoplayCarousel";
import "./SponsorsSection.css";
import { useSpring, animated } from "@react-spring/web";
import { fadeInLeftAnimation } from "../../../../animations";
import { firstRowCards } from "../../../../components/Carrusel/carousel-config";

const SponsorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInFromLeft = useSpring(fadeInLeftAnimation(inView));

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
      <AutoplayCarousel cards={firstRowCards} />
    </section>
  );
};

export default SponsorsSection;
