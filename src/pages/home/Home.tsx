import { Suspense, lazy } from "react";
import { Spinner } from "../../components/Spinner/Spinner";

const DonationsSection = lazy(
  () => import("./components/DonationsSection/DonationsSection")
);
const OurDogsSection = lazy(
  () => import("./components/OurDogsSection/OurDogsSection")
);
const PresentationSection = lazy(
  () => import("./components/PresentationSection/PresentationSection")
);
const SponsorsSection = lazy(
  () => import("./components/SponsorsSection/SponsorsSection")
);

const Home = () => {
  return (
    <Suspense fallback={<Spinner backgroundColor="#000000" />}>
      <PresentationSection />
      <OurDogsSection />
      <DonationsSection />
      <SponsorsSection />
    </Suspense>
  );
};

export default Home;
