import { useMutation } from "@tanstack/react-query";
import "./Partners.css";
import { setSubscription } from "../../api/subscriptions/subscriptions";

export const Partners = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: setSubscription,
  });

  const onSubscription = () => {
    const payer_email = "test_user_327558032@testuser.com";

    mutate(payer_email, {
      onSuccess: (response) => {
        window.location.href = response.url;
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <div className="partners-container">
      <h3 className="title-h3">Convertite en socio</h3>
      <p className="paragraph">
        Con tu aporte mensual, nos ayudás a seguir rescatando y cuidando a los
        perritos que más lo necesitan.
      </p>
      <div>
        <span className="title-h4">Tu aporte de </span>
        <span className="title-h4 strong-text">$3000 mensuales </span>
        <span className="title-h4">nos ayuda a marcar la diferencia</span>
      </div>
      <div className="cards-wrapper">
        <div className="card">
          <h4 className="card-icon">🐾</h4>
          <h4 className="title-h4">Aportes mensuales</h4>
          <p className="paragraph">
            Con tu aporte mensual, nos ayudás a seguir rescatando y cuidando a
            los perritos que más lo necesitan.
          </p>
        </div>
        <div className="card">
          <h4 className="card-icon">❤️</h4>
          <h4 className="title-h4">Aportes únicos</h4>
          <p className="paragraph">
            Con tu aporte único, nos ayudás a seguir rescatando y cuidando a los
            perritos que más lo necesitan.
          </p>
        </div>
      </div>
      <button
        className="partner-button"
        type="button"
        title="¡Hace click para hacerte socio y hacer felices a los vasquitos!"
        onClick={onSubscription}
      >
        {isPending ? "Redirigiendo..." : "¡Quiero ser socio!"}
      </button>
    </div>
  );
};
