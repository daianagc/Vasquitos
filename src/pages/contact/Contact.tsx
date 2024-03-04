import { useForm, SubmitHandler } from "react-hook-form";
import "./Contact.css";
import imagenContacto from "../../public/img/imagen-contacto.jpg";

type Inputs = {
  fullName: string;
  email: string;
  contactMessage: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const required = "Este campo es requerido";
  const pattern = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Email inválido",
  };
  const minLength = {
    value: 10,
    message: "El mensaje debe tener al menos 10 caracteres",
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className="partners-container">
        <h3 className="title-h3">Contactate con nosotros</h3>
        <p className="paragraph">
          Cualquier aporte, mensaje y/o dudas que tengas, hacelo a través del
          siguiente formulario.
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
              <span className="error-message">{errors.fullName.message}</span>
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

          <button className="form-button" type="submit">
            Enviar
          </button>
        </div>
        <div className="right-wrapper">
          <img src={imagenContacto} alt="Imagen de un refugio con perros" />
        </div>
      </form>
    </>
  );
};
