const router = require("express").Router();
const homepageController = require("../controllers/HomepageController");
const tasksController = require("../controllers/TasksController");

router.get("/", homepageController.index);

router.post("/tasks", tasksController.store);

router.delete("/task/delete/:id", tasksController.delete);

router.post("/task/toggle/:id", tasksController.toogle);

module.exports = router;
