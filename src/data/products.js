//Bebidas
import CocaCola from "../assets/images/menu/drinks/coca-cola-classic.jpeg";
import MountainDew from "../assets/images/menu/drinks/mountain-dew-citrus.webp";
import PepsiCola from "../assets/images/menu/drinks/pepsi-cola.jpeg";
import Milo from "../assets/images/menu/drinks/milos.jpeg";
import DrPepper from "../assets/images/menu/drinks/dr-pepper-soda-diet.jpg";
import SpriteCaffeine from "../assets/images/menu/drinks/sprite-caffeine-free.jpeg";
import GreatValueSweet from "../assets/images/menu/drinks/great-value.jpeg";
import SToK from "../assets/images/menu/drinks/stok.webp";
import Lipton from "../assets/images/menu/drinks/lipton-green-tea.jpeg";
import CanadaDry from "../assets/images/menu/drinks/canada-dry-ginger.jpg";

//Pasta
import ChickenAlfredo from "../assets/images/menu/pasta/chicken-alfredo.jpeg";
import AllaGricia from "../assets/images/menu/pasta/alla-gricia.webp";
import SheetPan from "../assets/images/menu/pasta/burrata-caprese-gnocchi.jpeg";
import AllaVodka from "../assets/images/menu/pasta/penne-alla-vodka.jpeg";
import BakedSpaghetti from "../assets/images/menu/pasta/baked-spaghetti.jpeg";

//Pizza
import CheesePizza from "../assets/images/menu/pizza/cheese-pizza.jpg";
import VeggiePizza from "../assets/images/menu/pizza/veggie-pizza.jpg";
import PepperoniPizza from "../assets/images/menu/pizza/pepperoni-pizza.jpg";
import MeatPizza from "../assets/images/menu/pizza/meat-pizza.jpg";
import MargheritaPizza from "../assets/images/menu/pizza/margherita-pizza.jpg";
import BBQPizza from "../assets/images/menu/pizza/BBQ-chicken-pizza.jpg";
import AllaPalla from "../assets/images/menu/pizza/pizza-alla-pala.jpg";
import Prosciutto from "../assets/images/menu/pizza/prosciutto-e-funghi.jpeg";
import DetroitStyle from "../assets/images/menu/pizza/detroit-style.jpeg";

//Sushi
import SalmonPoke from "../assets/images/menu/sushi/sushi-19.jpeg";
import VeggiePoke from "../assets/images/menu/sushi/sushi-26.jpeg";
import MiniSalmon from "../assets/images/menu/sushi/sushi-12.jpeg";
import OmbosSeth from "../assets/images/menu/sushi/sushi-23.jpeg";
import VeggieSet from "../assets/images/menu/sushi/sushi-27.jpeg";
import FriendlySet from "../assets/images/menu/sushi/sushi-8.jpeg";
import SunnyPhiladelphia from "../assets/images/menu/sushi/sushi-22.jpeg";


export const products = [
  {
    id: "cheese-pizza",
    ItemImg: CheesePizza,
    ItemName: "Pizza de Queso",
    ItemIngredients: "Pizza de masa, salsa de tomate, queso mozzarella.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },

  {
    id: "veggie-pizza",
    ItemImg: VeggiePizza,
    ItemName: "Pizza Veggie",
    ItemIngredients:
      "Pizza de masa, salsa de tomate, cebolla, pimentón, piña, jengibre, salsa picante, cilantro, salsa de ajo, salsa de mantequilla, queso.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "pepperoni-pizza",
    ItemImg: PepperoniPizza,
    ItemName: "Pizza de Pepperoni",
    ItemIngredients: "Pizza de pepperoni, masa de pizza, salsa de tomate, queso mozzarella.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "meat-pizza",
    ItemImg: MeatPizza,
    ItemName: "Pizza de Carne",
    ItemIngredients: "Carne, masa de pizza, salsa de tomate, queso mozzarella.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "margherita-pizza",
    ItemImg: MargheritaPizza,
    ItemName: "Pizza Margherita",
    ItemIngredients: "Pizza de masa, salsa de tomate, mozzarella fresca, albahaca, aceite de oliva.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "bbq-chicken-pizza",
    ItemImg: BBQPizza,
    ItemName: "Pizza BBQ de Pollo",
    ItemIngredients: "Pollo a la parrilla, salsa BBQ, masa de pizza, cebolla roja, cilantro, queso mozzarella.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "alla-pala-pizza",
    ItemImg: AllaPalla,
    ItemName: "Pizza Alla Pala",
    ItemIngredients: "Pizza de masa, salsa de tomate, mozzarella, salami, jamón, champiñones, pimientos.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "prosciutto-e-funghi-pizza",
    ItemImg: Prosciutto,
    ItemName: "Pizza Prosciutto e Funghi",
    ItemIngredients: "Pizza italiana con masa fina, salsa de tomate, jamón serrano, champiñones frescos, queso mozzarella.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "detroit-style-pizza",
    ItemImg: DetroitStyle,
    ItemName: "Pizza Estilo Detroit",
    ItemIngredients: "Pizza de estilo Detroit con masa gruesa y esponjosa, salsa de tomate, queso mozzarella, pepperoni crujiente.",
    ItemPrice: (1000),
    Category: "Pizza",
    attributes: [
      {
        id: "size",
        name: "size",
        attributeOptions: [
          { id: "small", value: "small", slices: "6" },
          { id: "medium", value: "medium", slices: "8" },
          { id: "large", value: "large", slices: "10" },
          { id: "x-large", value: "x-large", slices: "12" },
        ],
      },
    ],
  },
  {
    id: "chicken-alfredo",
    ItemImg: ChickenAlfredo,
    ItemName: "Pasta Chicken Alfredo",
    ItemIngredients: "Pasta de fettuccine, pechuga de pollo, salsa Alfredo, ajo, queso parmesano.",
    ItemPrice: (1000),
    Category: "Pasta",
    attributes: [],
  },
  {
    id: "pasta-alla-gricia",
    ItemImg: AllaGricia,
    ItemName: "Pasta Alla Gricia",
    ItemIngredients: "Pasta rigatoni, guanciale, queso pecorino romano, pimienta negra.",
    ItemPrice: (1000),
    Category: "Pasta",
    attributes: [],
  },
  {
    id: "sheet-pan-burrata-caprese-gnocchi",
    ItemImg: SheetPan,
    ItemName: "Pasta con pollo y kale",
    ItemIngredients: "Pasta de pollo, kale, tomates cherry, ajo, aceite de oliva.",
    ItemPrice: (1000),
    Category: "Pasta",
    attributes: [],
  },
  {
    id: "penne-alla-vodka",
    ItemImg: AllaVodka,
    ItemName: "Pasta Alla Vodka",
    ItemIngredients: "Pasta, salsa de vodka, crema, tomate, albahaca.",
    ItemPrice: (1000),
    Category: "Pasta",
    attributes: [],
  },
  {
    id: "baked-spaghetti",
    ItemImg: BakedSpaghetti,
    ItemName: "Spaghetti al Horno",
    ItemIngredients: "Spaghetti, salsa marinara, carne molida, queso mozzarella, queso parmesano.",
    ItemPrice: (1000),
    Category: "Pasta",
    attributes: [],
  },
  {
    id: "salmon-poke",
    ItemImg: SalmonPoke,
    ItemName: "Salmon Poke",
    ItemIngredients: "Salmon, arroz, aguacate, pepino, cebolla verde, sésamo.",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },

  {
    id: "veggie-poke",
    ItemImg: VeggiePoke,
    ItemName: "Sushi Vegano",
    ItemIngredients: "Arroz, aguacate, pepino, zanahoria, pimiento rojo, sésamo.",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },
  {
    id: "mini-salmon-set-22-pcs",
    ItemImg: MiniSalmon,
    ItemName: "Sushi de salmon - 22Pzs",
    ItemIngredients: "Doble salmon  - 2pzs",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },
  {
    id: "the-bull-of-ombos-set-32-pcs",
    ItemImg: OmbosSeth,
    ItemName: "Sushi de ombos - 32Pzs",
    ItemIngredients: "Rollo de doble salmon - 8pzs, Rollo de atún picante - 8pzs, Rollo de camarón tempura - 8pzs, Rollo de pepino - 8pzs.",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },
  {
    id: "veggie-set-32-pcs",
    ItemImg: VeggieSet,
    ItemName: "Vegano set 32Pzs",
    ItemIngredients: "Tomate, aguacate, pepino, zanahoria, pimiento rojo, sésamo.",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },
  {
    id: "friendly-set-40-pcs",
    ItemImg: FriendlySet,
    ItemName: "Set amigo 40Pzs",
    ItemIngredients:
      "Maki de pepino - 8pzs, Maki de aguacate - 8pzs, Rollo de camarón tempura - 8pzs, Rollo de atún picante - 8pzs, Rollo de doble salmón - 8pzs.",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },
  {
    id: "sunny-philadelphia-roll-8-pcs",
    ItemImg: SunnyPhiladelphia,
    ItemName: "Pieza Sunny Philadelphia Roll - 8Pzs",
    ItemIngredients: "Salmon, queso crema, aguacate, pepino, sésamo.",
    ItemPrice: (1000),
    Category: "Sushi",
    attributes: [],
  },

  {
    id: "coca-cola-original-soda-pop",
    ItemImg: CocaCola,
    ItemName: "Coca-Cola Original",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },

  {
    id: "mountain-dew-citrus-soda-pop",
    ItemImg: MountainDew,
    ItemName: "Montaña de Citrus",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "pepsi-cola-soda-pop",
    ItemImg: PepsiCola,
    ItemName: "Pepsi Cola",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "milos-famous-sweet-tea",
    ItemImg: Milo,
    ItemName: "Te Dulce Famoso de Milos",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "dr-pepper-soda",
    ItemImg: DrPepper,
    ItemName: "Bebida Dr Pepper Soda",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "sprite-caffeine-free-lemon-lime-soda-pop",
    ItemImg: SpriteCaffeine,
    ItemName: "Bebida Sprite Sin Cafeína Limón-Lima",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "great-value-sweet-brewed-iced-tea",
    ItemImg: GreatValueSweet,
    ItemName: "Te Helado Dulce de Gran Valor",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "stok-cold-brew-coffee-black-iunsweetened",
    ItemImg: SToK,
    ItemName: "Cafe Helado",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "lipton-green-tea-citrus-iced-tea",
    ItemImg: Lipton,
    ItemName: "Te Lipton Verde Te ",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
  {
    id: "canada-dry-ginger-ale-soda",
    ItemImg: CanadaDry,
    ItemName: "Bebida Canada Dry Ginger Ale Soda",
    ItemPrice: (1000),
    Category: "Drinks",
    attributes: [],
  },
];
