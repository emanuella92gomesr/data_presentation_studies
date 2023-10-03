import { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Divider,
} from "@mui/material";
import { useList } from "../hooks/useList";

export const SimpleList = () => {
  const { getAllToDos1, getAllToDos2, listToDos1, listToDos2 } = useList();
  useEffect(() => {
    getAllToDos1();
  }, []);

  useEffect(() => {
    getAllToDos2();
  }, []);

  return (
    <>
      <List>
        {listToDos1.map((todo: any) => {
          return (
            <ListItem key={todo} role="listitem" onClick={() => ""}>
              <ListItemIcon>
                <Checkbox
                  checked={false}
                  inputProps={{
                    "aria-labelledby": todo.id,
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                {todo.title} - <b>Completed:</b> {todo.completed.toString()}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {listToDos2.map((todo: any) => {
          return (
            <ListItem key={todo} role="listitem" onClick={() => ""}>
              <ListItemIcon>
                <Checkbox
                  checked={false}
                  inputProps={{
                    "aria-labelledby": todo.id,
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                {todo.title} - <b>Completed:</b> {todo.completed.toString()}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
