import React, { useState, useCallback } from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import useStyles from "./TodoStyles";

const Todo = ({ id, content, status, onDelete }) => {
  const classes = useStyles();
  const [checked, setCheked] = useState(status === "pending" ? false : true);
  const [chipLabel, setChipLabel] = useState(
    status === "pending" ? "pending" : "done"
  );
  const [classCard, setClassCard] = useState(
    status === "pending" ? classes.cards : classes.cardsDone
  );

  const onToogle = useCallback(async () => {
    await axios.post(`http://localhost:4000/task/toggle/${id}`);
  }, [id]);

  const onClickDelete = useCallback(async () => {
    await axios.delete(`http://localhost:4000/task/delete/${id}`);
    onDelete(id);
  }, [id, onDelete]);

  const onChangeChecked = useCallback(() => {
    setCheked(!checked);
    setClassCard(checked ? classes.cards : classes.cardsDone);
    onToogle();
    setChipLabel(checked === "pending" ? "pending" : "done");
  }, [
    checked,
    setCheked,
    onToogle,
    classes.cards,
    classes.cardsDone,
    setChipLabel,
  ]);

  return (
    <Card className={classCard}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={12} lg={8} xl={8}>
          {content}
        </Grid>
        <Grid item sm={12} md={12} lg={2} xl={2}>
          <Button color="primary" variant="outlined" onClick={onClickDelete}>
            Delete
          </Button>
        </Grid>
        <Grid item sm={12} md={12} lg={1} xl={1}>
          <Chip label={chipLabel} color="primary" />
        </Grid>
        <Grid item sm={12} md={12} lg={1} xl={1}>
          <Checkbox
            name="checkedB"
            color="primary"
            checked={checked}
            onChange={onChangeChecked}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Todo;
