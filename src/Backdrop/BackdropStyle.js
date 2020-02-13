import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    Backdrop: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: "0",
        top: "0",
        backgroundColor: "rgba(0,0,0,0.5)"
    }
});
  
  export default useStyles;
  