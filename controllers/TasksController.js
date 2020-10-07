const Task = require("../models/Task");

exports.store = (req, res) => {
  let task = {};

  console.log(req.body);
  task.description = req.body.description;
  Task.create(task).then((id) => {
    console.log("Task created with id: ", id);
    if (req.xhr || req.headers.accept.indexOf("json") > -1) {
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect("/");
    }
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  Task.find(id).then((task) => {
    if (task == null) {
      res.status(404).send("Not found");
      return;
    }
    Task.delete(task.id).then((id) => {
      res.json({ status: "Deleted" });
    });
  });
};

exports.toogle = async (req, res) => {
  let id = req.params.id;
  const task = await Task.find(id).then((task) => {
    if (task == null) {
      res.status(404).send("Not found");
      return;
    }

    if (task.status == "pending") {
      task.status = "done";
    } else {
      task.status = "pending";
    }

    Task.update(task.id, task).then((id) => {
      res.json({ status: "Updated" });
    });
  });
};
