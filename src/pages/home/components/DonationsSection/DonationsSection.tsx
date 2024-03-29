import { NavLink } from "react-router-dom";
import "./DonationsSection.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import useIsMobile from "../../../../hooks/is-mobile";
import {
  fadeInRightAnimation,
  fadeInAboveAnimation,
} from "../../../../animations";

const DonationsSection = () => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInRight = useSpring(fadeInRightAnimation(inView));
  const fadeInFromAbove = useSpring(fadeInAboveAnimation(inView));

  return (
    <section ref={ref} className="donations-section">
      <div className="donations-title">
        <animated.h2 style={!isMobile ? fadeInFromAbove : fadeInRight}>
          Ayudanos con una donación
        </animated.h2>
      </div>
      <div className="donations-parrafo">
        <animated.p style={!isMobile ? fadeInFromAbove : fadeInRight}>
          Tu generosa ayuda nos permite continuar con nuestra misión de darles
          la vida que todo animal se merece.
        </animated.p>
      </div>
      <div className="donations-buttons-container">
        <NavLink to="/donaciones" className="button-texto-donar">
          Tu donación es muy importante
        </NavLink>
      </div>
    </section>
  );
};

export default DonationsSection;
