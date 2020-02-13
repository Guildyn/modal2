import React from "react";
import { Button, Divider } from "@material-ui/core";
import Styles from "./BookingStyle";

const CheckButton = ({ color, ...other }) => {
  const classes = Styles({ color });
  return <Button className={classes.BookingButton} {...other} />;
};

const Booking = ({ color, cancelSubmition, onSubmit }) => {
  const classes = Styles({ color });
  return (
    <div className={classes.Booking}>
      <p className={classes.BookingTitle}>
        <b>Congratulations your jet2 holiday booking has been confirmed</b>
      </p>
      <div className={classes.BookingBody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos
        unde iure porro temporibus ea corrupti velit ducimus. Error fugit, ea
        dolores tempore similique provident totam deleniti repudiandae amet
        inventore.
      </div>
      <Divider />
      <div className={classes.BookingButtonsContainer}>
        <div className={classes.BookingButtons}>
          <CheckButton onClick={cancelSubmition} color="cancel">Cancel</CheckButton>
          <CheckButton onClick={onSubmit} color="continue">Continue</CheckButton>
        </div>
      </div>
    </div>
  );
};

export default Booking;
