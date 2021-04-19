function endpointHandler(request, response){
    User.findById(request.userId)
        .then((user) => {
            return Tasks.findById(user.tasksId)
        }).then((tasks) => {
            tasks.completed = true;
            tasks.save();
        }).then(() => {
            response.send('Tasks completed');
        }).catch((err) => {
            response.send(err);
        });
} 