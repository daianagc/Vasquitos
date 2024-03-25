import { useMutation } from "@tanstack/react-query";
import "./Partners.css";
import { setSubscription } from "../../api/subscriptions/subscriptions";
import { useState } from "react";
import { EmailIcon } from "../../public/icons/EmailIcon";
import useIsMobile from "../../hooks/is-mobile";
import rescued4 from "../../public/img/rescued-4.jpg";
import rescued5 from "../../public/img/rescued-5.webp";
import { ToastContainer, toast } from "react-toastify";

export const Partners = () => {
  const [payerEmail, setPayerEmail] = useState("");
  const { mutate, isPending } = useMutation({
    mutationFn: setSubscription,
  });
  const isMobile = useIsMobile();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    isValidEmail ? setPayerEmail(email) : setPayerEmail("");
  };

  const onSubscription = () => {
    const payer_email = payerEmail.trim(); //"test_user_327558032@testuser.com";

    mutate(payer_email, {
      onSuccess: (response) => {
        if (response.url) window.location.href = response.url;

        toast.error(
          "Ocurrió un error al subscribirse. Inténtelo nuevamente más tarde.",
          {
            position: "bottom-right",
            className: "toast-success",
          }
        );
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <div className="container">
      <div className="content partners-content">
        <h1 className="title-h1">Convertite en socio</h1>
        <p className="paragraph partners-special-paragraph">
          Con tu aporte mensual, nos ayudás a seguir rescatando y cuidando a los
          perritos que más lo necesitan.
        </p>
        <div>
          <span className="title-h2">Tu aporte de </span>
          <span className="title-h2 strong-text">$3000 mensuales </span>
          <span className="title-h2">nos ayuda a marcar la diferencia</span>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <h2 className="card-icon">🐾</h2>
            <h2 className="title-h2">Aportes mensuales</h2>
            <p className="paragraph">
              Con tu aporte mensual, nos ayudás a seguir rescatando y cuidando a
              los perritos que más lo necesitan.
            </p>
            <img
              className="rescued-partner-image"
              src={rescued4}
              alt="Imagen de un vasquito"
            />
          </div>
          <div className="card">
            <h2 className="card-icon">❤️</h2>
            <h2 className="title-h2">Aportes únicos</h2>
            <p className="paragraph">
              Con tu aporte único, nos ayudás a seguir rescatando y cuidando a
              los perritos que más lo necesitan.
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
            disabled={!payerEmail}
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
