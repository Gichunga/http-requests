function endpointHandler(request, response)
{
    User.findById(request.userId, function(err, user){
        if(err){
            response.send(err)
        }
        else{
            Tasks.findById(user.tasksId, function(err, tasks){
                if(err){
                    response.send(err);
                }
                else{
                    tasks.completed = true;
                    tasks.save(function(err){
                        if(err){
                            response.send(err);
                        }
                        else{
                            response.send("Tasks Completed");
                        }
                    });
                }
            });
        }
    });
}
