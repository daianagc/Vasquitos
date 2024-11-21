import { useInView } from "react-intersection-observer";
import AutoplayCarousel from "../../../../components/Carrusel/AutoplayCarousel";
import "./SponsorsSection.css";
import { useSpring, animated } from "@react-spring/web";
import { fadeInLeftAnimation } from "../../../../animations";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSponsors } from "../../../../api/sponsors/getSponsors";
import { Spinner } from "../../../../components/Spinner/Spinner";
import {
  CardDetail,
  repeatCards,
} from "../../../../components/Carrusel/carousel-config";

const SponsorsSection = () => {
  let sponsors: CardDetail[] = [];
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  const fadeInFromLeft = useSpring(fadeInLeftAnimation(inView));
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["sponsors"],
    queryFn: getSponsors,
    refetchOnWindowFocus: false,
    initialData: () => queryClient.getQueryData(["sponsors"]),
    staleTime: queryClient.getQueryData(["sponsors"]) ? Infinity : 0,
  });

  if (isPending) return <Spinner />;

  if (data) {
    sponsors = repeatCards(data as CardDetail[]);
  }

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
      <AutoplayCarousel cards={sponsors} />
    </section>
  );
};

export default SponsorsSection;
