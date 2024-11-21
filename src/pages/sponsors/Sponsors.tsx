import "./Sponsors.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSponsors } from "../../api/sponsors/getSponsors";
import { Spinner } from "../../components/Spinner/Spinner";
import { CardDetail } from "../../components/Carrusel/carousel-config";

const Sponsors = () => {
  let sponsors: CardDetail[] = [];
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["sponsors"],
    queryFn: getSponsors,
    refetchOnWindowFocus: false,
    initialData: () => queryClient.getQueryData(["sponsors"]),
    staleTime: queryClient.getQueryData(["sponsors"]) ? Infinity : 0,
  });
  const goToUrl = (url: string | undefined) => {
    if (url) window.open(url, "_blank");
  };

  if (isPending) return <Spinner />;

  if (data) {
    sponsors = (data as CardDetail[]).sort((a: CardDetail, b: CardDetail) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <section className="sponsors-page">
      <h2 className="sponsors-title">Nuestros Patrocinadores</h2>
      <h2 className="sponsors-title">💪👏👇</h2>
      <div className="sponsors-paragraph">
        <p>
          Estamos muy agradecidos por el enorme aporte de cada uno de ellos.
        </p>
        <p className="highlighted-paragraph">
          Su ayuda es fundamental para el refugio.
        </p>
        <p className="info-paragraph">
          Haciendo click en cada logo, podrás acceder a su página web / red
          social y obtener más información.
        </p>
      </div>
      <div className="sponsors-container">
        {sponsors.map((sponsor, i) => {
          return (
            <div
              key={i}
              className="sponsor-card"
              title={`Hace click y conoce más sobre ${sponsor.name}`}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                onClick={() => goToUrl(sponsor.url)}
              ></img>
              <p>{sponsor.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
