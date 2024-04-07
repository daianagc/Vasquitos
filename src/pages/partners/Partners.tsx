import { useMutation } from "@tanstack/react-query";
import "./Partners.css";
import { setSubscription } from "../../api/subscriptions/subscriptions";
import { useRef, useState } from "react";
import { EmailIcon } from "../../public/icons/EmailIcon";
import useIsMobile from "../../hooks/is-mobile";
import rescued3 from "../../public/images/lucy.jpg";
import rescued4 from "../../public/images/uma.jpg";
import rescued5 from "../../public/images/linda.jpg";
import { ToastContainer, toast } from "react-toastify";

export const Partners = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [payerEmail, setPayerEmail] = useState("");
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: setSubscription,
  });
  const isMobile = useIsMobile();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    isValidEmail ? setPayerEmail(email) : setPayerEmail("");
  };

  const onSubscription = () => {
    //"test_user_327558032@testuser.com";
    const payer_email = payerEmail.trim();

    mutate(payer_email, {
      onSuccess: (response) => {
        if (inputRef) inputRef.current!.value = "";

        if (response.url) window.location.href = response.url;
      },
      onError: (error) => {
        console.error(error);

        toast.error(
          "Ocurrió un error al subscribirse. Inténtelo nuevamente más tarde.",
          {
            position: "bottom-right",
            className: "toast-success",
          }
        );
      },
    });
  };

  return (
    <div className="container">
      <div className="content partners-content">
        <h1 className="title-h1">Convertite en socio</h1>
        <p className="paragraph partners-special-paragraph">
          Asociándote nos ayudás a seguir rescatando y cuidando a los perritos
          que más lo necesitan.
        </p>
        <div>
          <span className="title-h2">Tu aporte de </span>
          <span className="title-h2 strong-text">$3000 mensuales </span>
          <span className="title-h2">nos ayuda a marcar la diferencia</span>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <h2 className="card-icon">🐾</h2>
            <h2 className="title-h2">Alimentos</h2>
            <p className="paragraph">
              Necesario para que tengan la mejor calidad de vida posible.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued3}
              alt="Imagen de un vasquito"
            />
          </div>
          <div className="card">
            <h2 className="card-icon">💊</h2>
            <h2 className="title-h2">Medicamentos</h2>
            <p className="paragraph">
              Importante para tratamientos y eventualidades de salud.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued4}
              alt="Imagen de un vasquito"
            />
          </div>
          <div className="card">
            <h2 className="card-icon">🏡</h2>
            <h2 className="title-h2">Mantenimiento</h2>
            <p className="paragraph">
              Para que tengan un lugar seguro y cómodo para vivir.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued5}
              alt="Imagen de un vasquito"
            />
          </div>
        </div>
        <div className="form-wrapper">
          <div className="input-wrapper">
            <div className="icon-wrapper">
              <EmailIcon
                width={isMobile ? "30" : "40"}
                height={isMobile ? "30" : "40"}
              />
            </div>
            <input
              className="form-input"
              ref={inputRef}
              type="email"
              name="payerEmail"
              id="payer_email"
              placeholder={
                isMobile ? "Ingresa tu email" : "Primero ingresa tu email aquí"
              }
              onChange={handleEmail}
            />
          </div>
          <button
            className="partner-button"
            type="button"
            title="¡Hace click para hacerte socio y hacer felices a los vasquitos!"
            disabled={!payerEmail || isPending}
            onClick={onSubscription}
          >
            {isPending ? "Redirigiendo..." : "¡Quiero ser socio!"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
