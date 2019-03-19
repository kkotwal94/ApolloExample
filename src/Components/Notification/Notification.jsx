import React, { Component } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import NotificationContent from "./NotificationContent";
import toggleNotification from "../../Graphql/Notification";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

class Notification extends Component {
  handleClose = () => {
    const { toggleNotification, notification } = this.props;

    toggleNotification({
      variables: {
        open: false,
        variant: notification.variant,
        message: notification.message
      }
    });
  };

  render() {
    let { notification } = this.props;
    notification = notification ? notification : null;
    console.log(notification);
    return (
      notification && (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={notification.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
        >
          <NotificationContent
            message={notification.message}
            variant={notification.variant}
            handleClose={this.handleClose}
          />
        </Snackbar>
      )
    );
  }
}

Notification.defaultProps = {
  open: false,
  variant: "Warning",
  message: "Default"
};

Notification.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.oneOf(["Success", "Error", "Warning"]),
  message: PropTypes.string
};

const notificationQuery = gql`
  query notification {
    notification @client {
      message
      variant
      open
    }
  }
`;

export default compose(
  graphql(notificationQuery, {
    props: ({ data: { notification } }) => ({
      notification
    })
  }),
  graphql(toggleNotification, { name: "toggleNotification" })
)(Notification);
