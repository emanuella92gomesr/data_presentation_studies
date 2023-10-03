import { toDoType } from "../types";
import axios from "axios";
import { useState } from "react";

export const useList = () => {
  const [loading, setLoading] = useState(true);
  const [toDoData, setToDoData] = useState<toDoType>({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });

  const getToDo = async (id: number) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}/`
      );
      console.log(data);
      setToDoData({
        userId: data.userId,
        id: data.id,
        title: data.title,
        completed: data.completed,
      });
      //   console.log(toDoData);
    } catch (error) {
      console.log(error);
    }
  };

  const [listToDos1, setListToDos1] = useState<toDoType[]>([]);
  const [listToDos2, setListToDos2] = useState<toDoType[]>([]);

  const getAllToDos1 = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/`
      );
      console.log(data);
      const allTodos = data.map((result: any) => ({
        userId: result.userId,
        id: result.id,
        title: result.title,
        completed: result.completed,
      }));
      setListToDos1(allTodos);
      setLoading(false);
      console.log(listToDos1);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllToDos2 = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/`
      );
      console.log(data);
      const allTodos = data.map((result: any) => ({
        userId: result.userId,
        id: result.id,
        title: result.title,
        completed: result.completed,
      }));
      setListToDos2(allTodos.slice(9, 17));
      setLoading(false);
      console.log(listToDos2);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    toDoData,
    getToDo,
    getAllToDos1,
    getAllToDos2,
    listToDos1,
    listToDos2,
  };
};
