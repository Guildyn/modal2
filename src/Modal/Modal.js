import React, { Fragment } from "react";
import Styles from "./ModalStyles";

const Modal = ({ children, show }) => {
  const classes = Styles({ show });
  return (
    <Fragment>
      <div className={classes.Modal}>{children}</div>
    </Fragment>
  );
};

export default Modal;
