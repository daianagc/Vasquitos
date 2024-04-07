import "./AboutUs.css";
import imagenIrene from "../../public/images/irene.jpeg";
import imagenPatio from "../../public/images/patio.jpeg";
import imagenBlanca from "../../public/images/blanca.jpeg";
import user from "../../public/images/user.jpg";
import rescued1 from "../../public/images/titan.jpg";
import rescued2 from "../../public/images/angelita.jpg";
import rescued3 from "../../public/images/charlie.jpg";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";

export const AboutUs = () => {
  const values = [
    {
      title: "Respeto",
      paragraph:
        "Para nosotros el respeto hacia los perros implica brindarle amor incondicional, creando un ambiente de confianza y seguridad para ellos y dedicando tiempo a jugar, acariciar y cuidar su bienestar en todo momento.",
      image: rescued1,
    },
    {
      title: "Compromiso",
      paragraph:
        "Nos comprometemos a continuar la labor iniciada por nuestra fundadora Irene, asegurándonos de seguir brindando atención y buscar hogares que cumplan con las condiciones de adopción para cada uno de nuestros perros.",
      image: rescued2,
    },
    {
      title: "Solidaridad",
      paragraph:
        "Estamos convencidos de que la solidaridad hacia los perros se expresa a través de la adopción consciente, el voluntariado, las donaciones, la educación sobre sus necesidades y el apoyo a programas de rescate.",
      image: rescued3,
    },
  ];
  const members = [
    {
      name: "Marcelo Morales",
      role: "Presidente",
    },
    {
      name: "Mauricio Cucco",
      role: "Vicepresidente",
    },
    {
      name: "Silvia Mónico",
      role: "Secretaria",
    },
    {
      name: "Julieta Morales",
      role: "Tesorera",
    },
    {
      name: "Constanza Morales",
      role: "Vocal titular",
    },
    {
      name: "Vanesa Aura",
      role: "Vocal titular",
    },
    {
      name: "Mario Bidegaray",
      role: "Vocal suplente",
    },
    {
      name: "Ana Tomas",
      role: "Revisora de cuentas titular",
    },
    {
      name: "Gladys Blasco",
      role: "Revisora de cuentas suplente",
    },
  ];

  return (
    <div className="container">
      <div className="content about-us-content">
        <div className="section main-section">
          <h1 className="title-h1">Vascos Animalistas VG</h1>
          <div className="phrase-wrapper">
            <p className="paragraph main-paragraph justify">
              "En nuestro refugio de perros, nos dedicamos con pasión y
              dedicación a brindar amor, cuidado y un hogar temporal a perros
              sin hogar. Nuestro equipo está comprometido con el bienestar de
              cada uno de nuestros peludos residentes, proporcionándoles
              atención veterinaria, alimentación adecuada y mucho cariño
              mientras esperan encontrar su familia para siempre. En un ambiente
              cálido y acogedor, trabajamos incansablemente para asegurarnos de
              que cada cola que llega a nuestro refugio encuentre un final
              feliz, lleno de amor y comprensión."
            </p>
            <div className="image-wrapper">
              <img
                className="about-us-cover"
                src={imagenIrene}
                alt="Imagen de Irene Gamboa Tapia"
              />
              <p>Nuestra fundadora, Irene Gamboa Tapia</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="title-h2">Historia</h2>
          <section>
            <img
              className="backyard-image"
              src={imagenPatio}
              alt="Imagen del refugio"
            />
            <p className="paragraph history-paragraph justify">
              {`En la pintoresca ciudad costera de Villa Gesell, se encuentra un refugio especial que se caracteriza en su mayoría por darle lugar a perros ancianos, como así también casos de abandono y maltrato, conocido como "Vascos Animalistas". Fundado por Irene Gamboa Tapia, este refugio es un faro de esperanza y compasión para los caninos de edad avanzada que han sido abandonados o desplazados. \n`}
            </p>
            <p className="paragraph history-paragraph justify">
              {`La historia de Vascos Animalistas comenzó cuando Irene, una amante de los animales con un profundo amor por los perros, se enfrentó a la triste realidad de muchos de estos compañeros peludos en su comunidad. Determinada a marcar la diferencia decidió tomar medidas y fundar un refugio dedicado exclusivamente a cuidarlos y protegerlos. \n
            Tras el fallecimiento de Irene, Blanca Samprosqui tomó las riendas del refugio, continuando su legado y compromiso con los perros. Con su liderazgo, el refugio siguió siendo un lugar de amor y cuidado para los residentes caninos que necesitaban amparo y protección. \n`}
            </p>
            <div className="special-image-wrapper">
              <img
                className="blanca-image"
                src={imagenBlanca}
                alt="Imagen de Blanca Samprosqui"
              />
              <p>Blanca Samprosqui</p>
            </div>
            <p className="paragraph justify" style={{ whiteSpace: "pre-line" }}>
              {`Recientemente, a principios de febrero, lamentablemente, Blanca también falleció, dejando un vacío en la comunidad de Vascos Animalistas. Sin embargo, la dedicación y el compromiso con la misión del refugio continúan gracias al esfuerzo de una nueva comisión que ha asumido la responsabilidad de mantener vivo el legado de Irene y Blanca. \n
              Esta nueva comisión, formada por individuos comprometidos con la causa de los perros víctimas de abandono y maltrato, problemas de salud y longevidad, se esfuerza por continuar brindando cuidado y protección a los residentes caninos de Vascos Animalistas. A pesar de los desafíos que enfrentan, como la falta de recursos y el duelo por la pérdida de sus líderes anteriores, están decididos a seguir adelante y asegurarse de que el refugio siga siendo un lugar de amor y esperanza para los perros de Villa Gesell y más allá. \n 
            La historia de Vascos Animalistas es un testimonio conmovedor del poder del amor y la compasión para transformar vidas, tanto humanas como caninas, y aunque han enfrentado pérdidas significativas, su compromiso con la causa sigue siendo inquebrantable.`}
            </p>
          </section>
          <section className="institucional-video">
            <VideoPlayer
              width={800}
              height={460}
              dataCldPublicId="institucional-vascos-animalistas-vg"
            />
          </section>
        </div>
        <div className="section">
          <h2 className="title-h2">Objetivos del refugio</h2>
          <ul className="objetives">
            <li>
              <span>
                Proporcionar un ambiente seguro y cómodo para perros que han
                sido abandonados, víctimas de maltrato o con problemas de salud.
              </span>
            </li>
            <li>
              <span>
                Mejorar la calidad de vida de los perros mediante cuidados
                médicos, alimentación adecuada y atención individualizada.
              </span>
            </li>
            <li>
              <span>
                Fomentar la adopción responsable de estos perros y promover la
                adopción en lugar de la compra.
              </span>
            </li>
            <li>
              <span>
                Ofrecer programas de voluntariado y oportunidades de servicio
                comunitario para personas interesadas en ayudar y pasar tiempo
                con ellos.
              </span>
            </li>
            <li>
              <span>
                Establecer alianzas con veterinarios, organizaciones de
                bienestar animal y otros refugios para compartir recursos y
                apoyar la causa de los perros a nivel local y nacional.
              </span>
            </li>
          </ul>
          <div className="values-wrapper">
            {values.map((value) => (
              <div className="value" key={value.title}>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-paragraph justify">{value.paragraph}</p>
                <img
                  className="rescued-image"
                  src={value.image}
                  alt="Imagen de un vasquito"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="title-h2">Miembros</h2>
          <div className="members-wrapper">
            {members.map((member) => (
              <div className="member" key={member.name}>
                <img
                  className="member-image"
                  src={user}
                  alt="Nombre del miembro"
                />
                <h5 className="member-name">{member.name}</h5>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
