import { useQuery } from "@tanstack/react-query";
import "./OurDogs.css";
import { MutableRefObject, useRef, useState } from "react";
import { getDogs } from "../../api/dogs/getDogs";
import useOutsideClick from "../../hooks/outside-click";
import { Dog } from "./interfaces/dog.interface";
import { Spinner } from "../../components/Spinner/Spinner";
import { DogStatus } from "./enums/dog-status.enum";

export function OurDogs() {
  const [showModal, setShowModal] = useState(false);
  const dogRef: MutableRefObject<null | Dog> = useRef(null);
  const ref = useRef(null);

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

  // const showDescription = () => {
  //   return data.data?.find((dog: Dog) => dog.id === dogRef.current?.id)
  //     ?.description;
  // };

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
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
              <div className="modal-main">
                <img
                  src={dogRef.current?.image}
                  className="img-dogs"
                  alt="Imagen de un/una vasquitx"
                />
                <div className="description-wrapper">
                  <div className="description-dogs">
                    {dogRef.current?.description}
                  </div>
                  <div className="adopt-button">
                    <button className="apadrina">APADRINA</button>
                    <button className="adoptar">ADOPTAR</button>
                  </div>
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
