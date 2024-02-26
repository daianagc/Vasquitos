export const setSubscription = async (payer_email: string) => {
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

  console.log("RESPUESTA: ", response.json);

  return response.json();
};
