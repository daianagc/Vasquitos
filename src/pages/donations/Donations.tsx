import { useState } from "react";
import { setPreference } from "../../api/preferences/preferences";
import "./Donations.css";

export const Donations = () => {
  const [flexibleAmount, setFlexibleAmount] = useState(0);

  const handleFlexibleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    value ? setFlexibleAmount(+value) : setFlexibleAmount(0);
  };

  const handlePreference = async ({
    id,
    unit_price,
  }: {
    id: string;
    unit_price: number;
  }) => {
    const title = "Donación";
    const url: string = await setPreference({ id, title, unit_price });

    window.location.href = url;
  };

  return (
    <>
      <div className="container">
        <h3 className="title-h3">Donaciones</h3>
        <p className="paragraph">
          Este dinero, tan necesario para el refugio, será utilizado para
          medicamentos, alimentos, mantención edilicia, y para todas las mejoras
          necesarias para que los vasquitos puedan vivir como se merecen, de la
          mejor forma posible. Desde ya MUCHÍSIMAS GRACIAS por tu esfuerzo.{" "}
          <strong>Para ellos es muy valioso.</strong>
        </p>
        <div className="buttons-wrapper">
          <button
            type="button"
            title="Donar mil pesos"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-1000",
                unit_price: 1000,
              })
            }
          >
            $1000
          </button>
          <button
            type="button"
            title="Donar tres mil pesos"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-3000",
                unit_price: 3000,
              })
            }
          >
            $3000
          </button>
          <button
            type="button"
            title="Donar cinco mil pesos"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-5000",
                unit_price: 5000,
              })
            }
          >
            $5000
          </button>
          <button
            type="button"
            title="Donar diez mil pesos"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-10000",
                unit_price: 10000,
              })
            }
          >
            $10000
          </button>
          <button
            type="button"
            title="Donar quince mil pesos"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-15000",
                unit_price: 15000,
              })
            }
          >
            $15000
          </button>
          <button
            type="button"
            title="Donar veinte mil pesos"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-20000",
                unit_price: 20000,
              })
            }
          >
            $20000
          </button>
        </div>
        <div className="donation-container">
          <div className="input-wrapper">
            <p
              className="dollar-icon"
              style={{ display: flexibleAmount ? "unset" : "none" }}
            >
              $
            </p>
            <input
              className="donation-input"
              type="number"
              min={0}
              placeholder="¿Te gustaría donar otro monto? ¡Hacelo acá!"
              onChange={handleFlexibleAmount}
            />
          </div>
          <button
            type="button"
            disabled={!flexibleAmount}
            title="¡Hace click para donar y hacer felices a los vasquitos!"
            onClick={() =>
              handlePreference({
                id: "VASQUITOS-1000",
                unit_price: flexibleAmount,
              })
            }
          >
            Donar
          </button>
        </div>
      </div>
    </>
  );
};
