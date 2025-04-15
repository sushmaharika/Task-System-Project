// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cards from "../components/Home/Cards";
// import InputData from "../components/Home/InputData";

// const AdminDashboard = () => {
//   const [tasks, setTasks] = useState([]);
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [updatedTask, setUpdatedTask] = useState(null);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get("http://localhost:1000/api/v2/get-all-tasks", { headers });
//       setTasks(response.data);
//       localStorage.setItem("tasks", JSON.stringify(response.data));
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   useEffect(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     } else {
//       fetchTasks();
//     }
//   }, []);

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Admin Dashboard</h1>
//       <div className="p-4">
//         <h2 className="text-2xl font-semibold text-white mb-4">Tasks</h2>
//         {tasks.length > 0 ? (
//           <Cards
//             tasks={tasks}
//             toggleInputModal={toggleInputModal}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//         ) : (
//           <p className="text-center text-gray-900">No tasks available.</p>
//         )}
//         {isInputVisible && (
//           <InputData
//             toggleInputModal={toggleInputModal}
//             setTasks={setTasks}
//             updatedTask={updatedTask}
//             setUpdatedTask={setUpdatedTask}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

//export default AdminDashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Home/Cards";
import InputData from "../components/Home/InputData";
import API from "./api";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isInputVisible, setInputVisible] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchTasks = async () => {
    try {
      const response = await API.get("http://localhost:1000/api/v2/get-tasks-with-users", { headers });
      setTasks(response.data);
      localStorage.setItem("tasks", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleInputModal = () => setInputVisible(!isInputVisible);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Admin Dashboard</h1>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-white mb-4">Tasks</h2>
        {tasks.length > 0 ? (
          <Cards
            tasks={tasks}
            toggleInputModal={toggleInputModal}
            setTasks={setTasks}
            setUpdatedTask={setUpdatedTask}
          />
        ) : (
          <p className="text-center text-gray-900">No tasks available.</p>
        )}
        {isInputVisible && (
          <InputData
            toggleInputModal={toggleInputModal}
            setTasks={setTasks}
            updatedTask={updatedTask}
            setUpdatedTask={setUpdatedTask}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

