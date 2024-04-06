import { useRef, useState } from "react";
import { setPreference } from "../../api/preferences/preferences";
import "./Donations.css";
import { useMutation } from "@tanstack/react-query";
import useIsMobile from "../../hooks/is-mobile";
import { ToastContainer, toast } from "react-toastify";
import logoProvincia from "../../public/images/logo-provincia.jpg";
import logoMercadopago from "../../public/images/logo-mercadopago.png";

export const Donations = () => {
  const [flexibleAmount, setFlexibleAmount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loadingButtonId, setLoadingButtonId] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: setPreference,
  });
  const specialButtonId = "VASQUITOS-1000";
  const donationsButtons = [
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
    {
      id: "VASQUITOS-20000",
      unit_price: 20000,
      tagTitle: "Donar veinte mil pesos",
    },
  ];
  const cbu = "0140400901699005513935";
  const alias = "LOSVASQUITOS.VG";

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
    const title = "Donación a Vascos Animalistas";

    setLoadingButtonId(id);

    mutate(
      { id, title, unit_price },
      {
        onSuccess: (data) => {
          if (inputRef) inputRef.current!.value = "";

          window.location.href = data;
        },
        onError: (error) => {
          console.error(error);

          toast.error(
            "Ocurrió un error al realizar la donación Inténtelo nuevamente más tarde.",
            {
              position: "bottom-right",
              className: "toast-success",
            }
          );
        },
        onSettled: () => {
          setLoadingButtonId(null);
        },
      }
    );
  };

  const checkLoading = (id: string) => {
    return (isPending || isSuccess) && loadingButtonId === id;
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Texto copiado", {
        position: "bottom-right",
        className: "toast-error",
      });
    } catch (err) {
      toast.error("Hubo un error al copiar el texto", {
        position: "bottom-right",
        className: "toast-error",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="content donations-content">
          <h1 className="title-h1">Doná a los Vasquitos 🐶</h1>
          <p className="paragraph">
            Este dinero, tan necesario para el refugio, será utilizado para
            medicamentos, alimentos, mantención edilicia y para todas las
            mejoras necesarias para que los vasquitos puedan vivir como se
            merecen, de la mejor forma posible. Desde ya MUCHÍSIMAS GRACIAS por
            tu esfuerzo. <strong>Para ellos es muy valioso.</strong>
          </p>
          <div className="card account-card">
            <div className="donation-header">
              <h2 className="title-h2">Banco Provincia</h2>
              <img src={logoProvincia} alt="Logo del Banco Provincia" />
            </div>
            <div className="account-main-data">
              <div className="account-row">
                <p>CBU: </p>
                <p className="paragraph">{cbu}</p>
                <button className="copy-button" onClick={() => handleCopy(cbu)}>
                  Copiar
                </button>
              </div>
              <div className="account-row">
                <p>Alias: </p>
                <p className="paragraph">{alias}</p>
                <button
                  className="copy-button"
                  onClick={() => handleCopy(alias)}
                >
                  Copiar
                </button>
              </div>
              <div className="account-row">
                <p>Integrante: </p>
                <p className="paragraph">REFUGIO VASCOS ANIMALIASTAS VG</p>
              </div>
              <div className="account-row">
                <p>CUIL/CUIT: </p>
                <p className="paragraph">33-71699383-9</p>
              </div>
            </div>
          </div>
          <div className="donations-main-section">
            <div className="donation-header mercadopago-header">
              <h2 className="title-h2">Mercado Pago</h2>
              <img src={logoMercadopago} alt="Logo de Mercadopago" />
            </div>
            <div className="buttons-wrapper">
              {donationsButtons.map(({ id, unit_price, tagTitle }) => (
                <button
                  type="button"
                  disabled={isPending || isSuccess}
                  className={checkLoading(id) ? "loading-text" : ""}
                  title={tagTitle}
                  key={id}
                  onClick={() => handlePreference({ id, unit_price })}
                >
                  {loadingButtonId === id
                    ? "Redirigiendo..."
                    : `$${unit_price}`}
                </button>
              ))}
            </div>
            <div className="input-container">
              <div className="input-wrapper">
                <p
                  className="dollar-icon"
                  style={{ display: flexibleAmount ? "unset" : "none" }}
                >
                  $
                </p>
                <input
                  className="donation-input"
                  ref={inputRef}
                  type="number"
                  min={0}
                  placeholder={
                    isMobile
                      ? "Podes donar otro monto acá"
                      : "¿Te gustaría donar otro monto? ¡Hacelo acá!"
                  }
                  onChange={handleFlexibleAmount}
                />
              </div>
              <button
                type="button"
                disabled={!flexibleAmount || isPending || isSuccess}
                title="¡Hace click para donar y hacer felices a los vasquitos!"
                onClick={() =>
                  handlePreference({
                    id: specialButtonId,
                    unit_price: flexibleAmount,
                  })
                }
              >
                {loadingButtonId === specialButtonId
                  ? "Redirigiendo..."
                  : "Donar"}
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
