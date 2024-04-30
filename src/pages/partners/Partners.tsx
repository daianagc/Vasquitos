import "./Partners.css";
import rescued3 from "../../public/images/lucy.jpg";
import rescued4 from "../../public/images/uma.jpg";
import rescued5 from "../../public/images/linda.jpg";
import { ToastContainer /*, toast*/ } from "react-toastify";
/* import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "./types/inputs.type";
import { useMutation } from "@tanstack/react-query";
import { createPartner } from "../../api/partners/createPartner";
<<<<<<< HEAD
=======
import { useEffect, useState } from "react"; */
>>>>>>> 82abe1502488df9113f5a911a15bf3d61c8c61d5

export const Partners = () => {
  /* const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const required = "Este campo es requerido";
  const pattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Email inválido",
  };
  const { mutate, isPending } = useMutation({
    mutationFn: createPartner,
  });
<<<<<<< HEAD
=======
  const [provinces, setProvinces] = useState<{ id: number; nombre: string }[]>(
    []
  ); */
  /* const [cities, setCities] = useState<{ id: number; nombre: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch("https://apis.datos.gob.ar/georef/api/provincias", { signal })
      .then((response) => response.json())
      .then((json) => {
        setProvinces(json.provincias);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error.message);
        }
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setValue("province", "Buenos Aires");
      handleProvinceChange({
        target: { value: "Buenos Aires" },
      } as unknown as React.ChangeEvent<HTMLSelectElement>);
    }
  }, [setValue, isLoading]);

  useEffect(() => {
    setValue("city", "Villa Gesell");
  }, [setValue, cities]); */
>>>>>>> 82abe1502488df9113f5a911a15bf3d61c8c61d5

  /* const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data, {
      onSuccess: () => {
        window.location.href = import.meta.env.VITE_SUBSCRIPTION_URL;
      },
      onError: () => {
        toast.error("Ocurrió un error. Inténtelo nuevamente más tarde.", {
          position: "bottom-right",
          className: "toast-success",
        });
      },
    });
  }; */

<<<<<<< HEAD
=======
  /* const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedProvinceId = event.target.value;

    fetch(
      `https://apis.datos.gob.ar/georef/api/municipios?provincia=${selectedProvinceId}&campos=id,nombre&max=200`
    )
      .then((response) => response.json())
      .then((json) => {
        setCities(json.municipios);
      })
      .catch((error) => console.error(error));
  }; */

>>>>>>> 82abe1502488df9113f5a911a15bf3d61c8c61d5
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
        <div className="card special-card">
          <h3 className="title-h2">
            Próximamente estaremos habilitando el formulario de socio 👷.
            Mientras tanto, podés enviar un mensaje a nuestro WhatsApp para más
            información,{" "}
            <a
              className="title-h2 title-link"
              href="https://wa.me/542255417409"
              target="_blank"
              rel="noopener noreferrer"
            >
              haciendo click aquí
            </a>
            .
          </h3>
        </div>
        {/* <div className="form-wrapper-partners">
          <h2>Completá el siguiente formulario</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="wrapped-inputs">
              <div className="input-wrapper">
                <p className="paragraph">Nombre</p>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ingresá tu nombre"
                  {...register("name", { required })}
                />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </div>
              <div className="input-wrapper">
                <p className="paragraph">Apellido</p>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ingresá tu apellido"
                  {...register("last_name", { required })}
                />
                {errors.last_name && (
                  <span className="error-message">
                    {errors.last_name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="input-wrapper">
              <p className="paragraph">Email</p>
              <input
                className="form-input"
                type="email"
                placeholder="Ingresá tu email"
                {...register("email", {
                  required,
                  pattern,
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>
            <div className="wrapped-inputs">
              <div className="input-wrapper">
                <p className="paragraph">Teléfono</p>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ingresá tu teléfono"
                  {...register("phone", {
                    required,
                  })}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone.message}</span>
                )}
              </div>
              <div className="input-wrapper">
                <p className="paragraph">DNI</p>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Ingresá tu DNI"
                  {...register("dni", {
                    required,
                  })}
                />
                {errors.dni && (
                  <span className="error-message">{errors.dni.message}</span>
                )}
              </div>
            </div>
            <div className="submit-container">
              <h4 className="info">
                Luego serás redirigido a Mercado Pago para completar la
                subscripción.
              </h4>
              <button
                className="partner-button"
                title="¡Hace click para hacerte socio y hacer felices a los vasquitos!"
                disabled={isPending}
              >
                {isPending ? "Guardando..." : "¡Quiero ser socio!"}
              </button>
            </div>
          </form>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};
