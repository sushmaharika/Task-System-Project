// const router = require("express").Router();
// const User = require("../models/user");
// const Task = require("../models/task");
// const bcrypt = require("bcryptjs");
// const authenticateToken = require("./auth");

// // Middleware to check if the user is an admin
// const checkAdmin = async (req, res, next) => {
//   const { id } = req.headers;
//   const user = await User.findById(id);
//   if (user && user.isAdmin) {
//     next();
//   } else {
//     res.status(403).json({ message: "Access denied. Admins only." });
//   }
// };

// // Add Employee
// router.post("/add-employee", authenticateToken, checkAdmin, async (req, res) => {
//   try {
//     const { username, email, password, role } = req.body;
//     const existingUser = await User.findOne({ username });
//     const existingEmail = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "Username already exists" });
//     } else if (username.length < 4) {
//       return res.status(400).json({ message: "Username should have at least 4 characters" });
//     }
//     if (existingEmail) {
//       return res.status(400).json({ message: "Email already exists" });
//     }
//     const hashPass = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       username,
//       email,
//       password: hashPass,
//       isAdmin: role === "admin",
//     });
//     await newUser.save();
//     return res.status(200).json({ message: "Employee added successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get All Employees
// router.get("/employees", authenticateToken, checkAdmin, async (req, res) => {
//   try {
//     const employees = await User.find({ isAdmin: false });
//     res.status(200).json(employees);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Get All Users
// router.get("/users", authenticateToken, checkAdmin, async (req, res) => {
//   try {
//     const users = await User.find().select("username email isAdmin");
//     res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// // Assign Task to Employees
// router.post("/assign-task", authenticateToken, checkAdmin, async (req, res) => {
//   try {
//     const { employeeIds, task } = req.body;
//     const newTask = new Task(task);
//     const savedTask = await newTask.save();
//     await User.updateMany(
//       { _id: { $in: employeeIds } },
//       { $push: { tasks: savedTask._id } }
//     );
//     res.status(200).json({ message: "Task assigned successfully", task: savedTask });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


const router = require("express").Router();
const User = require("../models/user");
const Task = require("../models/task");
const bcrypt = require("bcryptjs");
const authenticateToken = require("./auth");

// Middleware to check if the user is an admin
const checkAdmin = async (req, res, next) => {
  const { id } = req.headers;
  const user = await User.findById(id);
  if (user && user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};

// Add Employee
router.post("/add-employee", authenticateToken, checkAdmin, async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    } else if (username.length < 4) {
      return res.status(400).json({ message: "Username should have at least 4 characters" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashPass,
      isAdmin: role === "admin",
    });
    await newUser.save();
    return res.status(200).json({ message: "Employee added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get All Employees
router.get("/employees", authenticateToken, checkAdmin, async (req, res) => {
  try {
    const employees = await User.find({ isAdmin: false });
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Get All Users
router.get("/users", authenticateToken, checkAdmin, async (req, res) => {
  try {
    const users = await User.find().select("username email isAdmin");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// Assign Task to Employees
router.post("/assign-task", authenticateToken, checkAdmin, async (req, res) => {
  try {
    const { employeeIds, task } = req.body;
    const newTask = new Task(task);
    const savedTask = await newTask.save();
    await User.updateMany(
      { _id: { $in: employeeIds } },
      { $push: { tasks: savedTask._id } }
    );
    res.status(200).json({ message: "Task assigned successfully", task: savedTask });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

module.exports = router;