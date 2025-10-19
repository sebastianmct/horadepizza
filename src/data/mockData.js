
export const pizzas = [
  { id: 1, name: "Pizza Napolitana", description: "Salsa de tomate, mozzarella, albahaca", price: 7000, image: "/assets/images/pizza1.jpg" },
  { id: 2, name: "Pizza Pepperoni", description: "Pepperoni, queso extra", price: 8000, image: "/assets/images/pizza2.jpg" },
  { id: 3, name: "Pizza Hawaiana", description: "Jamón, piña y queso", price: 7500, image: "/assets/images/pizza3.jpg" }
];

export const users = [
  { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "customer" },
  { id: 2, name: "María López", email: "maria@example.com", role: "admin" }
];

export const orders = [
  { id: 1, userId: 1, items: [{ pizzaId: 2, qty: 1 }], total: 8000, status: "preparando" }
];