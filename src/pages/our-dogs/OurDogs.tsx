import { useQuery } from "@tanstack/react-query";
import "./OurDogs.css";
import { MutableRefObject, useRef, useState } from "react";
import { getDogs } from "../../api/dogs/getDogs";
import useOutsideClick from "../../hooks/outside-click";
import { Dog } from "./interfaces/dog.interface";
import { Spinner } from "../../components/Spinner/Spinner";
import { DogStatus } from "./enums/dog-status.enum";
import useIsMobile from "../../hooks/is-mobile";
import { CloseIcon } from "../../public/icons/CloseIcon";
import { useNavigate } from "react-router-dom";

export function OurDogs() {
  const [showModal, setShowModal] = useState(false);
  const dogRef: MutableRefObject<null | Dog> = useRef(null);
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleOpenModal = (dog: Dog) => {
    dogRef.current = dog;
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  useOutsideClick(ref, handleCloseModal);

  const { data, isPending } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
  });

  const goToContact = (isSponsor: boolean = false) => {
    const dogName = dogRef.current?.name;
    const message = `Me gustaría ${
      isSponsor ? "apadrinar" : "adoptar"
    } a ${dogName}...`;
    const encodedMessage = encodeURIComponent(message);

    navigate(`/contacto?message=${encodedMessage}`);
  };

  if (isPending) return <Spinner />;

  return (
    <div className="our-dogs">
      <h1 className="title-principal">Lxs Vasquitxs 🐕❤️</h1>
      <div className="container-dogs">
        {data?.data
          ?.filter((dog: Dog) => dog.status_id !== DogStatus.NOT_FOR_ADOPTION)
          ?.map((dog: Dog) => (
            <div className="cards-dogs" key={dog.id}>
              {
                <img
                  src={dog.image}
                  className="img-dogs"
                  onClick={() => handleOpenModal(dog)}
                  alt="Imagen de un/una vasquitx"
                />
              }
              {<h2>{dog.name}</h2>}
            </div>
          ))}
        {showModal && (
          <div className="modal-container">
            <div className="modal-content" ref={ref}>
              <div className="modal-main">
                <div className="top-description-row">
                  <CloseIcon
                    style={{ display: isMobile ? "block" : "none" }}
                    className="close-icon"
                    width="35"
                    height="35"
                    onClick={handleCloseModal}
                  />
                  <img
                    src={dogRef.current?.image}
                    className="modal-image"
                    alt="Imagen de un/una vasquitx"
                  />
                  <div className="description-dogs">
                    <h2>{dogRef.current?.name}</h2>
                    <p className="paragraph dog-description-paragraph">
                      {dogRef.current?.description}
                    </p>
                  </div>
                </div>
                <div className="adopt-buttons">
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => goToContact(true)}
                  >
                    Apadrinar
                  </button>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => goToContact()}
                  >
                    Adoptar
                  </button>
                  <button
                    style={{ display: isMobile ? "none" : "block" }}
                    type="button"
                    className="tertiary-button"
                    onClick={handleCloseModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isPending && <h2>Cargando...</h2>}
      </div>
    </div>
  );
}
