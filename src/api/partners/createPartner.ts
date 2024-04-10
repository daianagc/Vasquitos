import { Inputs } from "../../pages/partners/types/inputs.type";

export const createPartner = async (payload: Inputs) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/partners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw response;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("createPartner error => ", error);

    throw new Error("Error al crear un socio");
  }
};
