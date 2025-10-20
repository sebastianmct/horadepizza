const ENVIRONMENT = import.meta.env.MODE;
import { LOGIN_URL } from "../../../data/constants";

export const loginUser = async (email, password) => {
  try {
    // En modo desarrollo, simular login exitoso si no hay backend
    if (ENVIRONMENT === "development" && (!LOGIN_URL || LOGIN_URL.includes("localhost:3001"))) {
      console.log("Modo desarrollo: Simulando login exitoso para:", email);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simular usuario
      const mockUser = {
        id: "dev-user-123",
        fullname: "Usuario Demo",
        email: email,
        address: "Dirección de prueba",
        number: "123456789"
      };
      
      return { success: true, user: mockUser };
    }

    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }
    return { success: true, user: result.user };
  } catch (error) {
    if (ENVIRONMENT === "development") console.log("Error in loginUser:", error.message);
    return { success: false, message: "Server error: failed to login. Please try again later." };
  }
};
