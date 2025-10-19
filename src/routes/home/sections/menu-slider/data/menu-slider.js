import pizzaOne375 from "../assets/pizza-one-375.webp";
import pizzaTwo375 from "../assets/pizza-two-375.webp";
import pizzaThree375 from "../assets/pizza-three-375.webp";
import SalmonPoke375 from "../assets/sushi-one-375.webp";
import VeggiePoke375 from "../assets/sushi-two-375.webp";
import MiniSalmon375 from "../assets/sushi-three-375.webp";
import ChickenAlfredo375 from "../assets/pasta-one-375.webp";
import AllaGricia375 from "../assets/pasta-two-375.webp";
import SheetPan375 from "../assets/pasta-three-375.webp";

import pizzaOne700 from "../assets/pizza-one-700.webp";
import pizzaTwo700 from "../assets/pizza-two-700.webp";
import pizzaThree700 from "../assets/pizza-three-700.webp";
import SalmonPoke700 from "../assets/sushi-one-700.webp";
import VeggiePoke700 from "../assets/sushi-two-700.webp";
import MiniSalmon700 from "../assets/sushi-three-700.webp";
import ChickenAlfredo700 from "../assets/pasta-one-700.webp";
import AllaGricia700 from "../assets/pasta-two-700.webp";
import SheetPan700 from "../assets/pasta-three-700.webp";

const menuSliderCategories = [
  {
    name: "pizza",
    id: "pizza",
  },
  {
    name: "sushi",
    id: "sushi",
  },
  {
    name: "pasta",
    id: "pasta",
  },
];
const productsData = [
  {
    id: "pepperoni-pizza",
    name: "Pizza de Pepperoni",
    description: "Pepperoni , mozzarella , queso cheddar ahumado , salsa de pizza.",
    price: (5000),
    img375: pizzaOne375,
    img700: pizzaOne700,
    category: "pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "Pizza de Pollo BBQ",
    description: "Pollo a la parrilla, salsa BBQ, cebolla roja, cilantro, mozzarella.",
    price: (5000),
    img375: pizzaTwo375,
    img700: pizzaTwo700,
    category: "pizza",
  },
  {
    id: "cheese-pizza",
    name: "Pizza de Queso",
    description: "Pizza clasica con salsa de tomate y una mezcla de quesos mozzarella y cheddar.",
    price: (5000),
    img375: pizzaThree375,
    img700: pizzaThree700,
    category: "pizza",
  },
  {
    id: "salmon-poke",
    img375: SalmonPoke375,
    img700: SalmonPoke700,
    name: "Sushi de Salmon",
    description: "Salmom,arroz, aguacate, pepino, salsa de soya, jengibre.",
    price: (5000),
    category: "sushi",
  },

  {
    id: "veggie-poke",
    img375: VeggiePoke375,
    img700: VeggiePoke700,
    name: "Sushi Vegetariano",
    description: "Tofu, edamame, zanahoria, pepino, aguacate, arroz, salsa de soya.",
    price: (5000),
    category: "sushi",
  },
  {
    id: "mini-salmon-set-22-pcs",
    img375: MiniSalmon375,
    img700: MiniSalmon700,
    name: "Set Mini Salmon 22 Piezas",
    description: "22 piezas de sushi de salmon con arroz, aguacate, pepino, salsa de soya.",
    price: (5000),
    category: "sushi",
  },
  {
    id: "chicken-alfredo",
    img375: ChickenAlfredo375,
    img700: ChickenAlfredo700,
    name: "Pasta Chicken Alfredo",
    description: "Pasta fettuccine, salsa alfredo, pollo a la parrilla, queso parmesano.",
    price: (5000),
    category: "pasta",
  },
  {
    id: "pasta-alla-gricia",
    img375: AllaGricia375,
    img700: AllaGricia700,
    name: "Pasta A La Grecia",
    description: "Pasta rigatoni, panceta, queso pecorino romano, pimienta negra.",
    price: (5000),
    category: "pasta",
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    img375: SheetPan375,
    img700: SheetPan700,
    name: "Pan de Gnocchi Burrata Caprese",
    description: "Gnocchi, tomates cherry, burrata, albahaca, aceite de oliva.",
    price: (5000),
    category: "pasta",
  },
];

export { productsData, menuSliderCategories };
