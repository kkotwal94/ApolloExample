import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  }
});

const Todo = ({ author, todo, onToggle, isComplete }) => (
  <ListItem>
    <Checkbox
      color="secondary"
      name="isComplete"
      checked={isComplete}
      onChange={() => onToggle()}
    />
    <ListItemText primary={todo} secondary={author} />
  </ListItem>
);

export default withStyles(styles, { withTheme: true })(Todo);
