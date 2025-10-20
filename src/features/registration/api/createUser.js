const ENVIRONMENT = import.meta.env.MODE;
import { USERS_URL } from "../../../data/constants";

export const createUser = async (user) => {
  try {
    // En modo desarrollo, simular registro exitoso si no hay backend
    if (ENVIRONMENT === "development" && (!USERS_URL || USERS_URL.includes("localhost:3001"))) {
      console.log("Modo desarrollo: Simulando registro exitoso para:", user.email);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simular éxito
      return { success: true };
    }

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
