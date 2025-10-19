const ENVIRONMENT = import.meta.env.MODE;
import { USERS_URL } from "../../../data/constants";

export const createUser = async (user) => {
  try {
    const response = await fetch(USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 429) {
      throw new Error("Muchas solicitudes. Por favor, inténtalo de nuevo más tarde.");
    }
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error en createUser:", error.message);
    return { success: false, message: "Error de servidor" };
  }
};
