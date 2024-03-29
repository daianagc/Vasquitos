import { Suspense, lazy } from "react";

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
    <Suspense
      fallback={
        <div>
          <h3>Cargando...</h3>
        </div>
      }
    >
      <PresentationSection />
      <OurDogsSection />
      <DonationsSection />
      <SponsorsSection />
    </Suspense>
  );
};

export default Home;
