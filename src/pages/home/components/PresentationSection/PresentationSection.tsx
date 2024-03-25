import "./PresentationSection.css";
import logo from "../../../../public/img/VASCOS-ANIMALISTAS.ico";
import presentation from "../../../../public/img/presentation.jpeg";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const PresentationSection = () => {
  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { duration: 1000 }, // Configure the duration of the animation
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2500 }, // Configure the duration of the animation
  });

  return (
    <section className="principal-section">
      <animated.h1 style={fadeInLeft}>Bienvenidos al refugio </animated.h1>
      <div className="presentation-main">
        <div className="container-principal">
          <img src={logo} alt="Logo del refugio" />
          <div className="container-parrafo">
            <p>
              We are a dedicated team of volunteers who rescue, rehabilitate,
              and rehome dogs in need.
            </p>
          </div>
          <div className="container-button">
            <NavLink to="/nosotros" className="button-ver">
              ¡Hacé click y conocenos!
            </NavLink>
          </div>
        </div>
        <animated.img
          style={fadeIn}
          className="presentation-image"
          src={presentation}
          alt="Imagen de presentación"
        />
      </div>
    </section>
  );
};

export default PresentationSection;
