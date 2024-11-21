export const getSponsors = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/sponsors`);

    if (!response.ok) {
      throw response;
    }

    const sponsors = await response.json();

    return sponsors;
  } catch (error) {
    console.error("sendEmail error => ", error);

    throw new Error("Error al enviar el mensaje");
  }
};
