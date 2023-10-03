import { TodoList } from "../types";

export const dataList: TodoList[] = [
  {
    item_name: "Apple",
    price: "$5",
    quantity: 1,
    brand_details: { name: "Golden Delicious", location: "San Francisco" },
    isChecked: true,
  },

  {
    item_name: "Banana",
    price: "$3",
    quantity: 2,
    brand_details: { name: "Fuji", location: "San Diego" },
    isChecked: false,
  },

  {
    item_name: "Pears",
    price: "$7",
    quantity: 4,
    brand_details: { name: "Golden Delicious", location: "San Francisco" },
    isChecked: true,
  },

  {
    item_name: "Milk",
    price: "$4",
    quantity: 3,
    brand_details: { name: "Mother Dairy", location: "California" },
    isChecked: false,
  },
  {
    item_name: "Rice",
    price: "$2",
    quantity: 6,
    brand_details: { name: "Blue Ville", location: "California" },
    isChecked: true,
  },
  {
    item_name: "Beans",
    price: "$4",
    quantity: 2,
    brand_details: { name: "Pappa Joe", location: "San Diego" },
    isChecked: false,
  },
  {
    item_name: "Lollipop",
    price: "$1",
    quantity: 7,
    brand_details: { name: "Fini", location: "San Francisco" },
    isChecked: false,
  }
];
