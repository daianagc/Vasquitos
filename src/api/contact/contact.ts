import { Inputs } from "../../pages/contact/types/inputs.type";

export const sendEmail = async ({
  fullName,
  email,
  contactMessage,
}: Inputs) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        contactMessage,
      }),
    });
    const data = await response.json();

    if (!data.ok) {
      throw data;
    }

    return;
  } catch (error) {
    console.error("sendEmail error => ", error);

    throw new Error("Error al enviar el mensaje");
  }
};
