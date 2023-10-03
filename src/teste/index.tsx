import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { TodoList } from "../types";
import { dataList } from "../data";

export const TestTable = () => {
  const columns = useMemo<MRT_ColumnDef<TodoList>[]>(
    () => [
      {
        accessorKey: "brand_details.location",
        header: "Location",
      },
      {
        accessorKey: "item_name",
        header: "Item name",
      },
      {
        accessorKey: "price",
        header: "Price",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "brand_details.name",
        header: "Brand",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={dataList}
      enableGrouping
      initialState={{ grouping: ["brand_details.location"] }}
    />
  );
};
