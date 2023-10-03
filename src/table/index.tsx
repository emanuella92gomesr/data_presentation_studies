import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { toDoType } from "../types";
import { useEffect, useMemo, useState } from "react";
import { useList } from "../hooks/useList";

export const Table = () => {
  const { getAllToDos1, listToDos1 } = useList();
  const [data, setData] = useState<toDoType[]>([]);

  useEffect(() => {
    getAllToDos1();
    setData(listToDos1);
  }, []);

  const allData = data.map((item) => item.title);
  console.log("allData", allData);

  const columns = useMemo<MRT_ColumnDef<toDoType>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "userId",
        header: "UserID",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
    ],
    []
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      
    />
  );
};
