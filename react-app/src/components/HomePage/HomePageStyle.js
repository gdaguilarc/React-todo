import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      minHeight: "100vh",
      padding: "2%",
    },
  })
);

export default useStyles;
