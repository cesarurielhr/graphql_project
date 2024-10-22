const Task = require('../models/projectModel');

module.exports = {
    getAllTask: async()=>{
        return await Task.find()

    },
    createTask: async(title) => {
        const task = new Task({title});
        return await task.save();
    },
    updateTask: async(_id, completed) => {
        return await Task.updateTask(_id, completed);
       
    },
    deleteTask: async(_id) => {
        return await Task.findByIdAndDelete({_id});
    }
}