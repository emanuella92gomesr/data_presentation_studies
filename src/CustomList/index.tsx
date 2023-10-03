// import {Checkbox, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material'

// interface customListProps = {
//     handleToggle
// }

// export const customList = (items: readonly number[]) => (
//     <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
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
//                     'aria-labelledby': labelId,
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