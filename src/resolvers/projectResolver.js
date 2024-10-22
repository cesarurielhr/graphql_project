const taskService = require('../services/projectService');

const resolvers = {
    Query:{
        task: () => {
            return taskService.getAllTask();

        }
    },
    Mutation:{
        createTask: ( _ , { title}) => {
            return taskService.createTask(title);
        },
        updateTask: ( _ , { _id,completed}) => {
            return taskService.updateTask(_id,completed);
        },
        deleteTask: ( _, {_id}) => {
            return taskService.deleteTask(_id);
        }
    }
}

module.exports = resolvers;