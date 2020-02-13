import React from 'react';
import Styles from './BackdropStyle';

const Backdrop = ({ show, cancelBackdrop }) => {
    const classes = Styles()
    return show ? <div className={classes.Backdrop} onClick={cancelBackdrop}></div> : null
}
 
export default Backdrop;