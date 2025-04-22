import Task from "../models/tasks.js";
import Notice from "../models/notification.js";
import User from "../models/user.js";


export const createTask = async (req, res) => {
    try {
      const { userId } = req.user;
  
      const { title, team, stage, date, priority, assets } = req.body;
  
      let text = "New task has been assigned to you";
      if (team?.length > 1) {
        text = text + ` and ${team?.length - 1} others.`;
      }
  
      text =
        text +
        ` The task priority is set a ${priority} priority, so check and act accordingly. The task date is ${new Date(
          date
        ).toDateString()}. Thank you!!!`;
  
      const activity = {
        type: "assigned",
        activity: text,
        by: userId,
      };
  
      const task = await Task.create({
        title,
        team,
        stage: stage.toLowerCase(),
        date,
        priority: priority.toLowerCase(),
        assets,
        activities: activity,
      });
  
      await Notice.create({
        team,
        text,
        task: task._id,
      });
  
      res
        .status(200)
        .json({ status: true, task, message: "Task created successfully." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
};
  
export const duplicateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    const newTask = await Task.create({
      ...task,
      title: task.title + "-Duplicate",
    });
    newTask.team = task.team;
    newTask.subTasks = team.subTasks;
    newTask.stage = task.stage;
    newTask.priority = task.priority;
    newTask.assets = task.assets;

    await newTask.save();

    let text = "New task has been assigned to you";
    if (task.team.length > 1) {
      text = text + ` and ${task.team.length - 1} others.`;
    }
    
  }
  catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};
export const postTaskActivity = async (req, res) => {
  
};
export const getTasks = async (req, res) => {
  
};

export const createSubTask = async (req, res) => {

};

export const updateTask = async (req, res) => {
  
};
export const trashTask = async (req, res) => {
  
};

export const deleterestoreTask = async (req, res) => {

};
  
