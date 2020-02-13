import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Modal: {
    position: "fixed",
    zIndex: "1000",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    //border: "4px solid red",
    transition: "all 0.3s ease-out",
    transform: props => (props.show ? "translateY(0)" : "translateY(-100vh)")
  },
  "@media(min-width: 600px)": {
    Modal: {
      width: "50vw",
      height: "50vh",
      left: "25vw",
      top: "25vh",
    }
  }
});

export default useStyles;
