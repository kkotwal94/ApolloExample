import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const notificationStyle = theme => ({
  message: {
    position: "absolute",
    top: "80px"
  },
  messageSuccess: {
    backgroundColor: "#009933"
  },
  messageWarning: {
    backgroundColor: "lightOrange"
  },
  messageError: {
    backgroundColor: "#FF003B"
  }
});

class NotificationContent extends Component {
  render() {
    const { message, variant, classes, handleClose, ...other } = this.props;
    const snackBarClasses = classNames({
      [classes.message]: true,
      [classes[`message${variant}`]]: variant
    });
    return (
      <SnackbarContent
        className={snackBarClasses}
        contentprops={{
          "aria-describedby": "message-id"
        }}
        action={[
          <Button key="undo" color="primary" onClick={handleClose}>
            Close
          </Button>
        ]}
        message={<span id="message-id">{message}</span>}
        {...other}
      />
    );
  }
}

NotificationContent.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["Success", "Error", "Warning"]).isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(notificationStyle)(NotificationContent);
