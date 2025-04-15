// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const AllTasks = () => {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [updatedTask, setUpdatedTask] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:1000/api/v2/get-user-tasks?page=${page}`,
//           { headers }
//         );
//         if (response.status === 200) {
//           const newTasks = Array.isArray(response.data) ? response.data : [];
//           setTasks((prevTasks) => {
//             const uniqueTasks = newTasks.filter(
//               (newTask) => !prevTasks.some((task) => task._id === newTask._id)
//             );
//             const updatedTasks = [...prevTasks, ...uniqueTasks];
//             localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//             return updatedTasks;
//           });
//         } else {
//           console.error("Unexpected response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         alert("Failed to load tasks. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     } else {
//       fetchTasks();
//     }
//   }, [page, isLoggedIn]);

//   const handleScroll = (e) => {
//     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom && !loading) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter((task) =>
//     task.title && task.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="relative overflow-y-auto max-h-screen" onScroll={handleScroll}>
//       {/* Search bar */}
//       <div className="w-full flex justify-center p-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
//         />
//       </div>

//       {/* Add Task button */}
//       <div className="w-full flex justify-end px-4 py-2">
//         <button onClick={toggleInputModal}>
//           <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
//           <p className="mt-2 text-sm text-gray-900">Add Task</p>
//         </button>
//       </div>

//       {/* All Tasks heading */}
//       <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
//       {/* Tasks */}
//       {filteredTasks.length > 0 ? (
//         <div className="p-4">
//           <Cards
//             home={true}
//             toggleInputModal={toggleInputModal}
//             tasks={filteredTasks}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//           {loading && <p className="text-center text-gray-900">Loading...</p>}
//         </div>
//       ) : (
//         <p className="text-center text-gray-900">No tasks available.</p>
//       )}

//       {/* Input Modal */}
//       {isInputVisible && (
//         <InputData
//           toggleInputModal={toggleInputModal}
//           setTasks={setTasks}
//           updatedTask={updatedTask}
//           setUpdatedTask={setUpdatedTask}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTasks;

// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const AllTasks = () => {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [updatedTask, setUpdatedTask] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:1000/api/v2/get-user-tasks?page=${page}`,
//           { headers }
//         );
//         if (response.status === 200) {
//           const newTasks = Array.isArray(response.data) ? response.data : [];
//           setTasks((prevTasks) => {
//             const uniqueTasks = newTasks.filter(
//               (newTask) => !prevTasks.some((task) => task._id === newTask._id)
//             );
//             const updatedTasks = [...prevTasks, ...uniqueTasks];
//             localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//             return updatedTasks;
//           });
//         } else {
//           console.error("Unexpected response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         alert("Failed to load tasks. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     } else {
//       fetchTasks();
//     }
//   }, [page, isLoggedIn]);

//   const handleScroll = (e) => {
//     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom && !loading) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter((task) =>
//     task.title && task.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="relative overflow-y-auto max-h-screen" onScroll={handleScroll}>
//       {/* Search bar */}
//       <div className="w-full flex justify-center p-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
//         />
//       </div>

//       {/* Add Task button */}
//       <div className="w-full flex justify-end px-4 py-2">
//         <button onClick={toggleInputModal}>
//           <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
//           <p className="mt-2 text-sm text-gray-900">Add Task</p>
//         </button>
//       </div>

//       {/* All Tasks heading */}
//       <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
//       {/* Tasks */}
//       {filteredTasks.length > 0 ? (
//         <div className="p-4">
//           <Cards
//             home={true}
//             toggleInputModal={toggleInputModal}
//             tasks={filteredTasks}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//           {loading && <p className="text-center text-gray-900">Loading...</p>}
//         </div>
//       ) : (
//         <p className="text-center text-gray-900">No tasks available.</p>
//       )}

//       {/* Input Modal */}
//       {isInputVisible && (
//         <InputData
//           toggleInputModal={toggleInputModal}
//           setTasks={setTasks}
//           updatedTask={updatedTask}
//           setUpdatedTask={setUpdatedTask}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTasks;



// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const AllTasks = () => {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [updatedTask, setUpdatedTask] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:1000/api/v2/get-user-tasks?page=${page}`,
//           { headers }
//         );
//         if (response.status === 200) {
//           const newTasks = Array.isArray(response.data) ? response.data : [];
//           setTasks((prevTasks) => {
//             const uniqueTasks = newTasks.filter(
//               (newTask) => !prevTasks.some((task) => task._id === newTask._id)
//             );
//             const updatedTasks = [...prevTasks, ...uniqueTasks];
//             localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//             return updatedTasks;
//           });
//         } else {
//           console.error("Unexpected response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         alert("Failed to load tasks. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     } else {
//       fetchTasks();
//     }
//   }, [page, isLoggedIn]);

//   const handleScroll = (e) => {
//     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom && !loading) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter((task) =>
//     task.title && task.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="relative overflow-y-auto max-h-screen" onScroll={handleScroll}>
//       {/* Search bar */}
//       <div className="w-full flex justify-center p-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
//         />
//       </div>

//       {/* Add Task button */}
//       <div className="w-full flex justify-end px-4 py-2">
//         <button onClick={toggleInputModal}>
//           <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
//           <p className="mt-2 text-sm text-gray-900">Add Task</p>
//         </button>
//       </div>

//       {/* All Tasks heading */}
//       <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
//       {/* Tasks */}
//       {filteredTasks.length > 0 ? (
//         <div className="p-4">
//           <Cards
//             home={true}
//             toggleInputModal={toggleInputModal}
//             tasks={filteredTasks}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//           {loading && <p className="text-center text-gray-900">Loading...</p>}
//         </div>
//       ) : (
//         <p className="text-center text-gray-900">No tasks available.</p>
//       )}

//       {/* Input Modal */}
//       {isInputVisible && (
//         <InputData
//           toggleInputModal={toggleInputModal}
//           setTasks={setTasks}
//           updatedTask={updatedTask}
//           setUpdatedTask={setUpdatedTask}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTasks;


// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const AllTasks = () => {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [updatedTask, setUpdatedTask] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:1000/api/v2/get-user-tasks?page=${page}`,
//           { headers }
//         );
//         if (response.status === 200) {
//           const newTasks = Array.isArray(response.data) ? response.data : [];
//           setTasks((prevTasks) => {
//             const uniqueTasks = newTasks.filter(
//               (newTask) => !prevTasks.some((task) => task._id === newTask._id)
//             );
//             const updatedTasks = [...prevTasks, ...uniqueTasks];
//             localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//             return updatedTasks;
//           });
//         } else {
//           console.error("Unexpected response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         alert("Failed to load tasks. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     } else {
//       fetchTasks();
//     }
//   }, [page, isLoggedIn]);

//   const handleScroll = (e) => {
//     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom && !loading) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter((task) =>
//     task.title && task.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="relative overflow-y-auto max-h-screen" onScroll={handleScroll}>
//       {/* Search bar */}
//       <div className="w-full flex justify-center p-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
//         />
//       </div>

//       {/* Add Task button */}
//       <div className="w-full flex justify-end px-4 py-2">
//         <button onClick={toggleInputModal}>
//           <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
//           <p className="mt-2 text-sm text-gray-900">Add Task</p>
//         </button>
//       </div>

//       {/* All Tasks heading */}
//       <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
//       {/* Tasks */}
//       {filteredTasks.length > 0 ? (
//         <div className="p-4">
//           <Cards
//             home={true}
//             toggleInputModal={toggleInputModal}
//             tasks={filteredTasks}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//           {loading && <p className="text-center text-gray-900">Loading...</p>}
//         </div>
//       ) : (
//         <p className="text-center text-gray-900">No tasks available.</p>
//       )}

//       {/* Input Modal */}
//       {isInputVisible && (
//         <InputData
//           toggleInputModal={toggleInputModal}
//           setTasks={setTasks}
//           updatedTask={updatedTask}
//           setUpdatedTask={setUpdatedTask}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTasks;


// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const AllTasks = () => {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [updatedTask, setUpdatedTask] = useState(null);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:1000/api/v2/get-user-tasks?page=${page}`,
//           { headers }
//         );
//         if (response.status === 200) {
//           const newTasks = Array.isArray(response.data) ? response.data : [];
//           setTasks((prevTasks) => {
//             const uniqueTasks = newTasks.filter(
//               (newTask) => !prevTasks.some((task) => task._id === newTask._id)
//             );
//             const updatedTasks = [...prevTasks, ...uniqueTasks];
//             localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//             return updatedTasks;
//           });
//         } else {
//           console.error("Unexpected response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//         alert("Failed to load tasks. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     } else {
//       fetchTasks();
//     }
//   }, [page, isLoggedIn]);

//   const handleScroll = (e) => {
//     const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom && !loading) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter((task) =>
//     task.title && task.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="relative overflow-y-auto max-h-screen" onScroll={handleScroll}>
//       {/* Search bar */}
//       <div className="w-full flex justify-center p-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
//         />
//       </div>

//       {/* Add Task button */}
//       <div className="w-full flex justify-end px-4 py-2">
//         <button onClick={toggleInputModal}>
//           <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
//           <p className="mt-2 text-sm text-gray-900">Add Task</p>
//         </button>
//       </div>

//       {/* All Tasks heading */}
//       <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
//       {/* Tasks */}
//       {filteredTasks.length > 0 ? (
//         <div className="p-4">
//           <Cards
//             home={true}
//             toggleInputModal={toggleInputModal}
//             tasks={filteredTasks}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//           {loading && <p className="text-center text-gray-900">Loading...</p>}
//         </div>
//       ) : (
//         <p className="text-center text-gray-900">No tasks available.</p>
//       )}

//       {/* Input Modal */}
//       {isInputVisible && (
//         <InputData
//           toggleInputModal={toggleInputModal}
//           setTasks={setTasks}
//           updatedTask={updatedTask}
//           setUpdatedTask={setUpdatedTask}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTasks;

// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import { IoAddCircleSharp } from "react-icons/io5";
// import InputData from "../components/Home/InputData";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const AllTasks = () => {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [updatedTask, setUpdatedTask] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   const fetchTasks = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:1000/api/v2/get-all-tasks", { headers });
//       setTasks(response.data);
//       localStorage.setItem("tasks", JSON.stringify(response.data));
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, [isLoggedIn]);

//   const toggleInputModal = () => setInputVisible(!isInputVisible);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter((task) =>
//     task.title && task.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="relative overflow-y-auto max-h-screen">
//       {/* Search bar */}
//       <div className="w-full flex justify-center p-4">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
//         />
//       </div>

//       {/* Add Task button */}
//       <div className="w-full flex justify-end px-4 py-2">
//         <button onClick={toggleInputModal}>
//           <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
//           <p className="mt-2 text-sm text-gray-900">Add Task</p>
//         </button>
//       </div>

//       {/* All Tasks heading */}
//       <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
//       {/* Tasks */}
//       {filteredTasks.length > 0 ? (
//         <div className="p-4">
//           <Cards
//             home={true}
//             toggleInputModal={toggleInputModal}
//             tasks={filteredTasks}
//             setTasks={setTasks}
//             setUpdatedTask={setUpdatedTask}
//           />
//           {loading && <p className="text-center text-gray-900">Loading...</p>}
//         </div>
//       ) : (
//         <p className="text-center text-gray-900">No tasks available.</p>
//       )}

//       {/* Input Modal */}
//       {isInputVisible && (
//         <InputData
//           toggleInputModal={toggleInputModal}
//           setTasks={setTasks}
//           updatedTask={updatedTask}
//           setUpdatedTask={setUpdatedTask}
//         />
//       )}
//     </div>
//   );
// };

// export default AllTasks;

import React, { useEffect, useState } from "react";
import Cards from "../components/Home/Cards";
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from "../components/Home/InputData";
import axios from "axios";
import { useSelector } from "react-redux";
import API from "../api";
const AllTasks = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [updatedTask, setUpdatedTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await API.get("http://localhost:1000/api/v2/get-all-tasks", { headers });
      setTasks(response.data);
      localStorage.setItem("tasks", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [isLoggedIn]);

  const toggleInputModal = () => setInputVisible(!isInputVisible);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.title && task.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="relative overflow-y-auto max-h-screen">
      {/* Search bar */}
      <div className="w-full flex justify-center p-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-black rounded-md w-full max-w-md text-black"
        />
      </div>

      {/* Add Task button */}
      <div className="w-full flex justify-end px-4 py-2">
        <button onClick={toggleInputModal}>
          <IoAddCircleSharp className="text-4xl text-gray-900 hover:text-gray-400 transition-all duration-300" />
          <p className="mt-2 text-sm text-gray-900">Add Task</p>
        </button>
      </div>

      {/* All Tasks heading */}
      <h1 className="text-3xl font-bold text-center mb-[40px] text-white-900">All Tasks</h1>
      {/* Tasks */}
      {filteredTasks.length > 0 ? (
        <div className="p-4">
          <Cards
            home={true}
            toggleInputModal={toggleInputModal}
            tasks={filteredTasks}
            setTasks={setTasks}
            setUpdatedTask={setUpdatedTask}
          />
          {loading && <p className="text-center text-gray-900">Loading...</p>}
        </div>
      ) : (
        <p className="text-center text-gray-900">No tasks available.</p>
      )}

      {/* Input Modal */}
      {isInputVisible && (
        <InputData
          toggleInputModal={toggleInputModal}
          setTasks={setTasks}
          updatedTask={updatedTask}
          setUpdatedTask={setUpdatedTask}
        />
      )}
    </div>
  );
};

export default AllTasks;
