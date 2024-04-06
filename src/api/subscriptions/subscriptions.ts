export const setSubscription = async (payer_email: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/payments/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payer_email }),
      }
    );

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("setSubscription error => ", error);

    throw new Error("Error al setear la suscripción de pago");
  }
};
