export const getDogs = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/dogs`);

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("sendEmail error => ", error);

    throw new Error("Error al enviar el mensaje");
  }
};
