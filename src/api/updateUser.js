
import { pizzas, users, orders } from "../data/mockData";

export default function mock() {
  return Promise.resolve({ pizzas, users, orders });
}

export async function updateUser(data) {

}
