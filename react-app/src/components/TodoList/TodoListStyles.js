import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontFamily: "Hand",
      color: theme.palette.common.black,
    },
    cardContainer: {
      margin: "0 auto",
    },
  })
);

export default useStyles;
