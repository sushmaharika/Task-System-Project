// const router = require("express").Router();
// const Task = require("../models/task");
// const User = require("../models/user");
// const authenticateToken = require("./auth");

// // Create task
// router.post("/create-task", authenticateToken, async (req, res) => {
//   try {
//     const { title, desc, assignedTo } = req.body;
//     const newTask = new Task({ title, desc, assignedTo });
//     const saveTask = await newTask.save();
//     await User.updateMany(
//       { _id: { $in: assignedTo } },
//       { $push: { tasks: saveTask._id } }
//     );
//     res.status(200).json({ message: "Task Created", newTask: saveTask });
//   } catch (error) {
//     console.log("Error in /create-task:", error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks assigned to the authenticated user
// router.get("/get-user-tasks", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.headers.id;
//     const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks
// router.get("/get-all-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Delete task
// router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Task.findByIdAndDelete(id);
//     res.status(200).json({ message: "Task deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Update task
// router.put("/update-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, desc } = req.body;
//     await Task.findByIdAndUpdate(id, { title: title, desc: desc });
//     res.status(200).json({ message: "Task updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Update important task
// router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const TaskData = await Task.findById(id);
//     const ImpTask = TaskData.important;
//     await Task.findByIdAndUpdate(id, { important: !ImpTask });
//     res.status(200).json({ message: "Task updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Update complete task
// router.put("/update-complete-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const TaskData = await Task.findById(id);

//     if (!TaskData) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     const CompleteTask = TaskData.complete;
//     await Task.findByIdAndUpdate(id, { complete: !CompleteTask });

//     res.status(200).json({ message: "Task updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // Get important tasks
// router.get("/get-imp-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find({ important: true }).sort({ createdAt: -1 });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get completed tasks
// router.get("/get-complete-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find({ complete: true }).sort({ createdAt: -1 });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get incompleted tasks
// router.get("/get-incomplete-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find({ complete: false }).sort({ createdAt: -1 });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;



// const router = require("express").Router();
// const Task = require("../models/task");
// const User = require("../models/user");
// const authenticateToken = require("./auth");

// // Create task
// router.post("/create-task", authenticateToken, async (req, res) => {
//   try {
//     const { title, desc, assignedTo } = req.body;
//     const newTask = new Task({ title, desc, assignedTo });
//     const saveTask = await newTask.save();
//     await User.updateMany(
//       { _id: { $in: assignedTo } },
//       { $push: { tasks: saveTask._id } }
//     );
//     res.status(200).json({ message: "Task Created", newTask: saveTask });
//   } catch (error) {
//     console.log("Error in /create-task:", error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks assigned to the authenticated user
// router.get("/get-user-tasks", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.headers.id;
//     const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks
// router.get("/get-all-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Delete task
// router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Task.findByIdAndDelete(id);
//     res.status(200).json({ message: "Task deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Update task
// router.put("/update-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, desc } = req.body;
//     await Task.findByIdAndUpdate(id, { title: title, desc: desc });
//     res.status(200).json({ message: "Task updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Update important task
// router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const TaskData = await Task.findById(id);
//     const ImpTask = TaskData.important;
//     await Task.findByIdAndUpdate(id, { important: !ImpTask });
//     res.status(200).json({ message: "Task updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Update complete task
// router.put("/update-complete-task/:id", authenticateToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const TaskData = await Task.findById(id);

//     if (!TaskData) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     const CompleteTask = TaskData.complete;
//     await Task.findByIdAndUpdate(id, { complete: !CompleteTask });

//     res.status(200).json({ message: "Task updated successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // Get important tasks
// router.get("/get-imp-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find({ important: true }).sort({ createdAt: -1 });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get completed tasks
// router.get("/get-complete-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find({ complete: true }).sort({ createdAt: -1 });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get incompleted tasks
// router.get("/get-incomplete-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find({ complete: false }).sort({ createdAt: -1 });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


// const router = require("express").Router();
// const Task = require("../models/task");
// const User = require("../models/user");
// const authenticateToken = require("./auth");

// // Create task
// router.post("/create-task", authenticateToken, async (req, res) => {
//   try {
//     const { title, desc, assignedTo } = req.body;
//     const newTask = new Task({ title, desc, assignedTo });
//     const saveTask = await newTask.save();
//     await User.updateMany(
//       { _id: { $in: assignedTo } },
//       { $push: { tasks: saveTask._id } }
//     );
//     res.status(200).json({ message: "Task Created", newTask: saveTask });
//   } catch (error) {
//     console.log("Error in /create-task:", error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks assigned to the authenticated user
// router.get("/get-user-tasks", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.headers.id;
//     const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks
// router.get("/get-all-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


// const router = require("express").Router();
// const Task = require("../models/task");
// const User = require("../models/user");
// const authenticateToken = require("./auth");

// // Create task
// router.post("/create-task", authenticateToken, async (req, res) => {
//   try {
//     const { title, desc, assignedTo } = req.body;
//     const newTask = new Task({ title, desc, assignedTo });
//     const saveTask = await newTask.save();
//     await User.updateMany(
//       { _id: { $in: assignedTo } },
//       { $push: { tasks: saveTask._id } }
//     );
//     res.status(200).json({ message: "Task Created", newTask: saveTask });
//   } catch (error) {
//     console.log("Error in /create-task:", error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks assigned to the authenticated user
// router.get("/get-user-tasks", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.headers.id;
//     const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks
// router.get("/get-all-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


// const router = require("express").Router();
// const Task = require("../models/task");
// const User = require("../models/user");
// const authenticateToken = require("./auth");

// // Create task
// router.post("/create-task", authenticateToken, async (req, res) => {
//   try {
//     const { title, desc, assignedTo } = req.body;
//     const newTask = new Task({ title, desc, assignedTo });
//     const saveTask = await newTask.save();
//     await User.updateMany(
//       { _id: { $in: assignedTo } },
//       { $push: { tasks: saveTask._id } }
//     );
//     res.status(200).json({ message: "Task Created", newTask: saveTask });
//   } catch (error) {
//     console.log("Error in /create-task:", error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks assigned to the authenticated user
// router.get("/get-user-tasks", authenticateToken, async (req, res) => {
//   try {
//     const userId = req.headers.id;
//     const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get all tasks
// router.get("/get-all-tasks", authenticateToken, async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("assignedTo", "username email");
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;

const router = require("express").Router();
const Task = require("../models/task");
const User = require("../models/user");
const authenticateToken = require("./auth");

// Create task
router.post("/create-task", authenticateToken, async (req, res) => {
  try {
    const { title, desc, assignedTo } = req.body;
    const newTask = new Task({ title, desc, assignedTo });
    const saveTask = await newTask.save();
    await User.updateMany(
      { _id: { $in: assignedTo } },
      { $push: { tasks: saveTask._id } }
    );
    res.status(200).json({ message: "Task Created", newTask: saveTask });
  } catch (error) {
    console.log("Error in /create-task:", error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get all tasks assigned to the authenticated user
router.get("/get-user-tasks", authenticateToken, async (req, res) => {
  try {
    const userId = req.headers.id;
    const tasks = await Task.find({ assignedTo: userId }).populate("assignedTo", "username email");
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get all tasks
router.get("/get-all-tasks", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "username email");
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get tasks with assigned users
router.get("/get-tasks-with-users", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedTo", "username email");
    const users = await User.find().select("username email");
    res.status(200).json({ tasks, users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Delete task
router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Update task
router.put("/update-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await Task.findByIdAndUpdate(id, { title: title, desc: desc });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Update important task
router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const ImpTask = TaskData.important;
    await Task.findByIdAndUpdate(id, { important: !ImpTask });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Update complete task
router.put("/update-complete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);

    if (!TaskData) {
      return res.status(404).json({ message: "Task not found" });
    }

    const CompleteTask = TaskData.complete;
    await Task.findByIdAndUpdate(id, { complete: !CompleteTask });

    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get important tasks
router.get("/get-imp-tasks", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ important: true }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get completed tasks
router.get("/get-complete-tasks", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ complete: true }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get incompleted tasks
router.get("/get-incomplete-tasks", authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ complete: false }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

module.exports = router;