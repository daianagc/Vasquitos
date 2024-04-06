import "./PresentationSection.css";
import logo from "../../../../public/images/VASCOS-ANIMALISTAS.ico";
import presentation from "../../../../public/images/presentation.jpeg";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { fadeInAnimation, fadeInLeftAnimation } from "../../../../animations";

const PresentationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInLeft = useSpring(fadeInLeftAnimation(inView));
  const fadeIn = useSpring(fadeInAnimation);

  return (
    <section ref={ref} className="principal-section">
      <animated.h1 style={fadeInLeft}>Bienvenidos a </animated.h1>
      <div className="presentation-main">
        <div className="container-principal">
          <img src={logo} alt="Logo del refugio" />
          <div className="container-parrafo">
            <p>
              Somos un refugio de gran trayectoria que rescata, rehabilita y
              reubica perros en situación de calle.
            </p>
          </div>
          <div className="container-button">
            <NavLink to="/nosotros" className="button-ver">
              Un poco de nuestra historia
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
