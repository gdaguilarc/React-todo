import React, { useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./TodoListStyles";
import InputTodo from "../InputTodo";
import Todo from "../Todo";
import useFetchTasks from "./useFetchTasks";

const TodoList = () => {
  const classes = useStyles();

  const { tasks, error, isLoading, setTasks } = useFetchTasks();

  const onChange = useCallback(
    (data) => {
      setTasks(tasks.concat(data));
    },
    [tasks, setTasks]
  );

  const onDelete = useCallback(
    (id) => {
      setTasks(
        tasks.filter((element) => {
          return element.id !== id;
        })
      );
    },
    [tasks, setTasks]
  );

  if (error) {
    return <>Something went wrong :( </>;
  }

  if (isLoading) {
    return <>Loading ... </>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <Typography variant="h1" className={classes.title}>
          Todo List
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <InputTodo onChange={onChange} />
      </Grid>

      {tasks.map((task) => (
        <Grid
          item
          sm={12}
          key={"grid-" + task.id}
          className={classes.cardContainer}
        >
          <Todo
            content={task.description}
            status={task.status}
            id={task.id}
            key={task.id}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
