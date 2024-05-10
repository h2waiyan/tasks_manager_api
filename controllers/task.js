const getAllTasks = async (req, res) => {
    res.send('All tasks returned');
}

const createTask = async (req, res) => {
    res.json(req.body);
}

const getTask = async (req, res) => {
    res.send('Single task returned');
}

const updateTask = async (req, res) => {
    res.send('Task updated');
}

const deleteTask = async (req, res) => {
    res.send('Task deleted');
}

module.exports = {
    getAllTasks, 
    createTask,
    getTask,
    updateTask,
    deleteTask
};