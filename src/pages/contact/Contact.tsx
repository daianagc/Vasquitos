import "./Contact.css";
import "react-toastify/dist/ReactToastify.min.css";
import { useForm, SubmitHandler } from "react-hook-form";
import imagenContacto from "../../public/images/imagen-contacto.jpg";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "../../api/contact/contact";
import { Inputs } from "./types/inputs.type";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: sendEmail,
  });
  const navigate = useNavigate();
  const required = "Este campo es requerido";
  const pattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Email inválido",
  };
  const minLength = {
    value: 10,
    message: "El mensaje debe tener al menos 10 caracteres",
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Mensaje enviado con éxito. Gracias por tu contacto.", {
          position: "bottom-right",
          className: "toast-success",
          autoClose: 3000,
          onClose: () => navigate("/"),
        });
      },
      onError: () => {
        toast.error(
          "Ocurrió un error al enviar el mensaje. Inténtelo nuevamente más tarde.",
          {
            position: "bottom-right",
            className: "toast-success",
          }
        );
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="content contact-content">
          <div className="header-wrapper">
            <h1 className="title-h1">Contactate con nosotros</h1>
            <p className="paragraph">
              Cualquier aporte, mensaje y/o dudas que tengas, hacelo a través
              del siguiente formulario.
            </p>
            <p className="paragraph strong-text">Gracias por tu interés.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="left-wrapper">
              <div className="input-wrapper">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Ingresa tu nombre y apellido"
                  {...register("fullName", { required })}
                />
                {errors.fullName && (
                  <span className="error-message">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="input-wrapper">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Ingresa tu email"
                  {...register("email", {
                    required,
                    pattern,
                  })}
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </div>

              <div className="input-wrapper">
                <textarea
                  className="form-textarea"
                  placeholder="Ingresa tu mensaje"
                  {...register("contactMessage", { required, minLength })}
                />
                {errors.contactMessage && (
                  <span className="error-message">
                    {errors.contactMessage.message}
                  </span>
                )}
              </div>

              <button
                className="form-button"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Enviando..." : "Enviar"}
              </button>
            </div>
            <div className="right-wrapper">
              <img src={imagenContacto} alt="Imagen de un refugio con perros" />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
