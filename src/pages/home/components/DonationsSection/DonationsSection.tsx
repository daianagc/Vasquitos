import { NavLink } from "react-router-dom";
import "./DonationsSection.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const DonationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInFromAbove = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translate3d(0%,0,0)" : "translate3d(0,-100%,0)",
    },
    config: { duration: 2000 }, // Configure the duration of the animation
  });

  return (
    <section ref={ref} className="donations-section">
      <div className="donations-title">
        <animated.h2 style={fadeInFromAbove}>
          Ayudanos con una donación
        </animated.h2>
      </div>
      <div className="donations-parrafo">
        <animated.p style={fadeInFromAbove}>
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
