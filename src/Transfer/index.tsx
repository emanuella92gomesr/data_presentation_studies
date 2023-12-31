// import { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Checkbox from "@mui/material/Checkbox";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import { useList } from "../hooks/useList";

// function not(a: number[], b: number[]) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a: number[], b: number[]) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

// const TransferList = () => {
//   const { getAllToDos1, getAllToDos2, listToDos1, listToDos2 } = useList();
//   useEffect(() => {
//     getAllToDos1();
//   }, []);

//   useEffect(() => {
//     getAllToDos2();
//   }, []);

//   const [checked, setChecked] = useState<number[]>([]);
//   const [left, setLeft] = useState<number[]>([0, 1, 2, 3]);
//   const [right, setRight] = useState<number[]>([4, 5, 6, 7]);

//   const leftChecked = intersection(checked, left);
//   const rightChecked = intersection(checked, right);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const handleAllRight = () => {
//     setRight(right.concat(left));
//     setLeft([]);
//   };

//   const handleCheckedRight = () => {
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const handleAllLeft = () => {
//     setLeft(left.concat(right));
//     setRight([]);
//   };

//   const customList = (items: number[]) => (
//     <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
//       <List dense component="div" role="list">
//         {items.map((value: number) => {
//           const labelId = `transfer-list-item-${value}-label`;

//           return (
//             <ListItem
//               key={value}
//               role="listitem"
//               button
//               onClick={handleToggle(value)}
//             >
//               <ListItemIcon>
//                 <Checkbox
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{
//                     "aria-labelledby": labelId,
//                   }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`List item ${value + 1}`} />
//             </ListItem>
//           );
//         })}
//       </List>
//     </Paper>
//   );

//   return (
//     <Grid container spacing={2} justifyContent="center" alignItems="center">
//       <Grid item>{customList(left)}</Grid>
//       <Grid item>
//         <Grid container direction="column" alignItems="center">
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleAllRight}
//             disabled={left.length === 0}
//             aria-label="move all right"
//           >
//             ≫
//           </Button>
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleCheckedRight}
//             disabled={leftChecked.length === 0}
//             aria-label="move selected right"
//           >
//             &gt;
//           </Button>
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleCheckedLeft}
//             disabled={rightChecked.length === 0}
//             aria-label="move selected left"
//           >
//             &lt;
//           </Button>
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleAllLeft}
//             disabled={right.length === 0}
//             aria-label="move all left"
//           >
//             ≪
//           </Button>
//         </Grid>
//       </Grid>
//       <Grid item>{customList(right)}</Grid>
//     </Grid>
//   );
// };

// export default TransferList;

import { FC, useState } from "react";
import {
  Grid,
  List,
  Card,
  CardHeader,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
  Divider,
} from "@mui/material";

interface Item {
  id: number;
  name: string;
}

function not(a: Item[], b: Item[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: Item[], b: Item[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: Item[], b: Item[]) {
  return [...a, ...not(b, a)];
}

const TransferList: FC = () => {
  const [checked, setChecked] = useState<Item[]>([]);
  const [left, setLeft] = useState<Item[]>([
    { id: 0, name: "John Doe" },
    { id: 1, name: "Todd" },
    { id: 2, name: "Jeff" },
    { id: 3, name: "Josh" },
  ]);

  const [right, setRight] = useState<Item[]>([
    { id: 4, name: "Shane" },
    { id: 5, name: "Justin" },
    { id: 6, name: "John Doe" },
    { id: 7, name: "Brandon" },
  ]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: Item) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: Item[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: Item[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    console.log(right);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: string, items: Item[]) => (
    <Card>
      <CardHeader
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value.id}-label`;

          return (
            <ListItem
              key={value.id}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList("Choices", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Chosen", right)}</Grid>
    </Grid>
  );
};

export default TransferList;
