const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String,requiere: true},
    description: {type: String, default: false},
    startDate: {type: String, default: false},
    endDate: {type: String, default: false},
    status: {type: String, default: false},
    budget: {type: Number, default: false},
})

const Task = new mongoose.model('project', projectSchema);

module.exports = Task;
