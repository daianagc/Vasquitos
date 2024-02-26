export const setPreference = async ({
  id,
  title,
  unit_price,
}: {
  id: string;
  title: string;
  unit_price: number;
}) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/payments/preference`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        unit_price,
      }),
    }
  );

  return response.json();
};
