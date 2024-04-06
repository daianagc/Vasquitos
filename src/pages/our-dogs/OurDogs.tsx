import { useQuery } from "@tanstack/react-query";
import "./OurDogs.css";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { getDogs } from "../../api/dogs/getDogs";
import useOutsideClick from "../../hooks/outside-click";

export function OurDogs() {
  const [showModal, setShowModal] = useState(false);
  const dogIdRef: MutableRefObject<null | number> = useRef(null);
  const ref = useRef(null);

  const handleOpenModal = (dogId: number) => {
    dogIdRef.current = dogId;
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  useOutsideClick(ref, handleCloseModal);

  const { data, isPending } = useQuery({
    queryKey: ["dogs"],
    queryFn: getDogs,
  });

  const showDescription = () => {
    return data.data?.find((dog) => dog.id === dogIdRef.current)?.description;
  };

  return (
    <div className="our-dogs">
      <h1 className="title-principal">Nuestros Vasquitos</h1>
      <div className="container-dogs">
        {data?.data?.map((dog) => (
          <div className="cards-dogs" key={dog.id}>
            {
              <img
                src={dog.image}
                className="img-dogs"
                onClick={() => handleOpenModal(dog.id)}
                alt=""
              />
            }
            {<h2>{dog.name}</h2>}
          </div>
        ))}
        {showModal && (
          <div className="modal-container">
            <div className="modal-content" ref={ref}>
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
              <div className="description-dogs">{showDescription()}</div>
              <div className="adopt-button">
                <button className="apadrina">APADRINA</button>
                <button className="adoptar">ADOPTAR</button>
              </div>
            </div>
          </div>
        )}
        {isPending && <h2>Cargando...</h2>}
      </div>
    </div>
  );
}
