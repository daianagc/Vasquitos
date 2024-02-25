import { useState } from "react";
import { setPreference } from "../../api/preferences/preferences";
import "./Donations.css";
import { useMutation } from "@tanstack/react-query";

export const Donations = () => {
  const [flexibleAmount, setFlexibleAmount] = useState(0);
  const [loadingButtonId, setLoadingButtonId] = useState<string | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: setPreference,
  });
  const donationsButtons = [
    {
      id: "VASQUITOS-3000",
      unit_price: 3000,
      tagTitle: "Donar tres mil pesos",
    },
    {
      id: "VASQUITOS-5000",
      unit_price: 5000,
      tagTitle: "Donar cinco mil pesos",
    },
    {
      id: "VASQUITOS-10000",
      unit_price: 10000,
      tagTitle: "Donar diez mil pesos",
    },
    {
      id: "VASQUITOS-15000",
      unit_price: 15000,
      tagTitle: "Donar quince mil pesos",
    },
  ];

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

    setLoadingButtonId(id);

    mutate(
      { id, title, unit_price },
      {
        onSuccess: (data) => {
          window.location.href = data;
        },
        onError: (error) => {
          // Handle the error here
          console.error(error);
        },
        onSettled: () => {
          setLoadingButtonId(null);
        },
      }
    );
  };

  return (
    <>
      <div className="container">
        <h3 className="title-h3">Doná a los Vasquitos 🐶</h3>
        <p className="paragraph">
          Este dinero, tan necesario para el refugio, será utilizado para
          medicamentos, alimentos, mantención edilicia, y para todas las mejoras
          necesarias para que los vasquitos puedan vivir como se merecen, de la
          mejor forma posible. Desde ya MUCHÍSIMAS GRACIAS por tu esfuerzo.{" "}
          <strong>Para ellos es muy valioso.</strong>
        </p>
        <div className="buttons-wrapper">
          {donationsButtons.map(({ id, unit_price, tagTitle }) => (
            <button
              type="button"
              className={isPending ? "loading-text" : ""}
              title={tagTitle}
              key={id}
              onClick={() => handlePreference({ id, unit_price })}
            >
              {loadingButtonId === id ? "Cargando..." : `$${unit_price}`}
            </button>
          ))}
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
