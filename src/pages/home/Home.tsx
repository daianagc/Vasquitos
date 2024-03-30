import DonationsSection from "./components/DonationsSection/DonationsSection";
import OurDogsSection from "./components/OurDogsSection/OurDogsSection";
import PresentationSection from "./components/PresentationSection/PresentationSection";
import SponsorsSection from "./components/SponsorsSection/SponsorsSection";

const Home = () => {
  return (
    <>
      <PresentationSection />
      <OurDogsSection />
      <DonationsSection />
      <SponsorsSection />
    </>
  );
};

export default Home;
