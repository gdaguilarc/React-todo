import React from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import useStyles from "./HomePageStyle";

import TodoList from "../TodoList";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <TodoList />
      </Container>
    </Box>
  );
};

export default HomePage;
