import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Booking: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
    width: "100vw",
    height: "100vh",
    padding: "auto",
    zIndex: "1"
  },
  BookingTitle: {
    textAlign: "left",
    padding: "0 10%",
    fontSize: "25px"
  },
  BookingBody: {
    textAlign: "justify",
    padding: "0 10% 5% 10%"
  },
  BookingButtonContainer: {
    width: "80%"
  },
  BookingButtons: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column"
  },
  BookingButton: {
    border: "1px solid #203240",
    width: "98%",
    height: "40px",
    background: props => (props.color === "continue" ? "#203240" : "#F2F2F2"),
    color: props => (props.color === "continue" ? "#FFF" : "#000"),
    "&:hover": {
      backgroundColor: "#FF0000",
      color: "#FFF"
    },
    margin: "5px 3px"
  },
  ThankYou: {
    textAlign: "center",
    margin: "50px auto"
  },
  ConfirmButton: {
    margin: " 0 150px"
  },
  "@media(min-width: 600px)": {
    Booking: {
      width: "49.5vw",
      height: "49.2vh",
      backgroundColor: "#f4f4f4"
    },
    BookingTitle: {
      fontSize: "20px"
    },
    BookingBody: {
      padding: "0 10% 5% 10%",
      fontSize: "19px"
    },
    BookingButtons: {
      flexDirection: "row"
    },
    BookingButton: {
      border: "1px solid #203240",
      width: "30%",
      height: "18%",
      margin: "25px 4px"
    }
  },
  "@media(min-width: 900px)": {
    BookingTitle: {
      paddingTop: "5%",
      fontSize: "25px"
    },
    BookingBody: {
      padding: "5% 10%"
    },
    BookingButtons: {
      flexDirection: "row"
    },
    BookingButton: {
      border: "1px solid #203240",
      width: "30%",
      height: "18%",
      margin: "4% 1%"
    }
  }
});

export default useStyles;
