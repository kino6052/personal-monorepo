import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Book from "@material-ui/icons/Book";

export const Item = ({ title = "test" }) => {
  return (<ListItem
        classes={{ root: "root" }}
      >
        <ListItemIcon className="icon">
        </ListItemIcon>
        <ListItemIcon className="icon">
          <Book />
        </ListItemIcon>
          <ListItemText
            primary={title}
          />
        {/* {!isEditing && (
          
        )}
        {isEditing && (
          <Input
            value={title}
            onChange={e =>
              actionService.next(EAction.HierarchyInputChange, { id, e })
            }
            // secondary={secondary ? "Secondary text" : null}
          />
        )} */}
      </ListItem>)
}