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
          Podes realizar una donación
        </animated.h2>
      </div>
      <div className="donations-parrafo">
        <animated.p style={fadeInFromAbove}>
          Your generous donation helps us continue our mission to rescue,
          rehabilitate, and rehome dogs in need.
        </animated.p>
      </div>
      <div className="donations-buttons-container">
        <NavLink to="/donaciones" className="button-texto-donar">
          Tu donación nos ayuda mucho
        </NavLink>
      </div>
    </section>
  );
};

export default DonationsSection;
