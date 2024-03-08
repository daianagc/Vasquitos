import "./AboutUs.css";
import imagenNosotros from "../../public/img/about-us.jpg";
import user from "../../public/img/user.jpg";
import rescued1 from "../../public/img/rescued-1.jpg";
import rescued2 from "../../public/img/rescued-2.jpg";
import rescued3 from "../../public/img/rescued-3.jpg";

export const AboutUs = () => {
  const values = [
    {
      title: "Respeto",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: rescued1,
    },
    {
      title: "Compromiso",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: rescued2,
    },
    {
      title: "Solidaridad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: rescued3,
    },
  ];
  const members = [
    {
      name: "Marcelo Morales",
      role: "Presidente",
    },
    {
      name: "Julieta Morales",
      role: "Tesorera",
    },
    {
      name: "Mauricio Cucco",
      role: "Vicepresidente",
    },
    {
      name: "Diego Maradona",
      role: "Vocal",
    },
    {
      name: "Juan Domingo Perón",
      role: "Vocal",
    },
    {
      name: "Diego Capusotto",
      role: "Vocal",
    },
    {
      name: "Pedro Saborido",
      role: "Vocal",
    },
    {
      name: "Axel Kicillof",
      role: "Vocal",
    },
    {
      name: "Marcelo Tinelli",
      role: "Vocal",
    },
    {
      name: "Juan Roman Riquelme",
      role: "Vocal",
    },
    {
      name: "Tini Stoeseel",
      role: "Vocal",
    },
  ];

  return (
    <div className="container">
      <div className="content about-us-content">
        <div className="section main-section">
          <h1 className="title-h1">Vascos Animalistas VG</h1>
          <p className="paragraph main-paragraph">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <img
            className="about-us-cover"
            src={imagenNosotros}
            alt="Imagen del refugio"
          />
        </div>
        <div className="section">
          <h2 className="title-h2">Historia</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
        <div className="section">
          <h2 className="title-h2">Objetivos del refugio</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <div className="values-wrapper">
            {values.map((value) => (
              <div className="value" key={value.title}>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-paragraph">{value.paragraph}</p>
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
