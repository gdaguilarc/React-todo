function deleteTask(id) {
  $.ajax({
    type: "DELETE",
    url: `/task/delete/${id}`,
    success: function (result) {
      $(`#${id}`).hide();
    },
  });
}

function addTask() {
  const description = $("#task_description").val();

  $.ajax({
    type: "POST",
    url: `/tasks`,
    data: { description: description },
    success: function (result) {
      $("#task_list").append(`
        <div class="card my-3" id=${result.id}>
        <div class="card-body">
          <p class="card-text">${description}</p>



          <input id="${result.id}-toggle" type="button" value=${result.status} class="btn btn-primary" onclick="toggle(${result.id})" />

          <input type="button" value="Delete" class="btn btn-danger" onclick="deleteTask(${result.id})" />
        </div>
      </div>
        `);
    },
  });
}

function toggle(id) {
  const currentStatus = $(`#${id}-toggle`).val();
  $.ajax({
    type: "POST",
    url: `/task/toggle/${id}`,
    success: function (result) {
      if (currentStatus == "pending") {
        $(`#${id}-toggle`).val("done");
      } else {
        $(`#${id}-toggle`).val("pending");
      }
    },
  });
}
