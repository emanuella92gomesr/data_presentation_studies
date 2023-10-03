export type toDoType = {
  userId: number;
  id: number;
  title: String;
  completed: boolean;
};

export type TodoList = {
  item_name: string;
  price: string;
  quantity: number;
  brand_details: {
    name: string;
    location: string;
  };
  isChecked: boolean;
};
