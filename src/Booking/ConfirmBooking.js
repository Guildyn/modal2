import React from "react";
import { Button } from "@material-ui/core";
import Styles from "./BookingStyle";

const ConfirmBooking = ({ onConfirmSubmit }) => {
    const classes = Styles()
    return ( 
        <React.Fragment>
            <div className={classes.Booking}>
                <h1 className={classes.ThankYou}><b>Thank You!</b></h1>
                <Button variant="outlined" size="large" className={classes.ConfirmButton} onClick={onConfirmSubmit}>Close</Button>
            </div>
        </React.Fragment>
     );
}
 
export default ConfirmBooking;
