import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Navigation = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Apollo Todo Example
            </Link>
          </Typography>
          <Link to="/todos" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Todo List</Button>
          </Link>
          <Link
            to="/loaded-todos"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Loading Todo List</Button>
          </Link>
          <Link
            to="/optimistic-response"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Optimistic Todo List</Button>
          </Link>
          <Link
            to="/create-todo"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Create Todo</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
