const knex = require("../database/connection");

exports.PENDING = "pending";
exports.FINISHED = "done";

exports.all = () => {
  return knex.select("*").from("tasks");
};

exports.create = (task) => {
  return knex("tasks").insert({ description: task.description });
};

exports.find = (id) => {
  return knex.select("*").from("tasks").where("id", id).first();
};

exports.update = (id, product) => {
  return knex("tasks")
    .update(product)
    .update("updated_at", knex.fn.now())
    .where("id", id);
};

exports.delete = (id) => {
  return knex("tasks").delete().where("id", id);
};
