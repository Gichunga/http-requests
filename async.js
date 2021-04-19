async function endpointHandler(request, response) {
  try {
    var user = await User.findById(request.userId);
    var tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    response.send("Tasks ");
  } catch(error) {
      response.send(err);
  }
}
