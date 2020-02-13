import React, { Fragment } from "react";
import Styles from "./ModalStyles";
//import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show }) => {
  const classes = Styles({ show });
  return (
    <Fragment>
      {/* <Backdrop show={show} cancelBackdrop={cancelModal} /> */}
      <div className={classes.Modal}>{children}</div>
    </Fragment>
  );
};

export default Modal;
