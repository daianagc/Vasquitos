import "./Sponsors.css";
import { sponsors } from "../../components/Carrusel/carousel-config";

const Sponsors = () => {
  const orderedSponsors = sponsors.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const goToUrl = (url: string | undefined) => {
    if (url) window.open(url, "_blank");
  };

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
        {orderedSponsors.map((sponsor, i) => {
          return (
            <div
              key={i}
              className="sponsor-card"
              title={`Hace click y conoce más sobre ${sponsor.title}`}
            >
              <img
                src={sponsor.imgUrl}
                alt={sponsor.title}
                onClick={() => goToUrl(sponsor.url)}
              ></img>
              <p>{sponsor.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
