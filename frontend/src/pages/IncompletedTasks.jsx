// import React, { useEffect, useState } from "react";
// import Cards from "../components/Home/Cards";
// import axios from "axios";
// import InputData from "../components/Home/InputData";

// const IncompletedTasks = () => {
//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [isInputVisible, setInputVisible] = useState(false);
//     const [updatedTask, setUpdatedTask] = useState(null);

//     const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//     };

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(
//                     `http://localhost:1000/api/v2/get-incomplete-tasks?page=${page}`, 
//                     { headers }
//                 );
//                 if (response.status === 200 && Array.isArray(response.data?.data)) {
//                     const newTasks = response.data.data;

//                     // Filter out duplicates based on the task ID
//                     setData((prevData) => {
//                         const uniqueTasks = newTasks.filter(
//                             (newTask) => !prevData.some((task) => task._id === newTask._id)
//                         );
//                         return [...prevData, ...uniqueTasks];
//                     });
//                 } else {
//                     console.error("Unexpected response structure:", response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching tasks:", error);
//                 alert("Failed to load tasks. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTasks();
//     }, [page]); // `data` is not included here to prevent unnecessary re-renders

//     const handleScroll = (e) => {
//         const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//         if (bottom && !loading) {
//             setPage((prevPage) => prevPage + 1);
//         }
//     };

//     const toggleInputModal = () => setInputVisible(!isInputVisible);

//     return (
//         <div className="p-4 overflow-y-auto max-h-screen" onScroll={handleScroll}>
//             <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Incompleted Tasks</h1>
//             {data.length > 0 ? (
//                 <Cards tasks={data} toggleInputModal={toggleInputModal} setTasks={setData} setUpdatedTask={setUpdatedTask} />
//             ) : (
//                 <p className="text-center text-gray-900">No incomplete tasks available.</p>
//             )}
//             {loading && <p className="text-center text-gray-900">Loading...</p>}
//             {isInputVisible && (
//                 <InputData
//                     toggleInputModal={toggleInputModal}
//                     setTasks={setData}
//                     updatedTask={updatedTask}
//                     setUpdatedTask={setUpdatedTask}
//                 />
//             )}
//         </div>
//     );
// };

// export default IncompletedTasks;

import React, { useEffect, useState } from "react";
import Cards from "../components/Home/Cards";
import axios from "axios";
import InputData from "../components/Home/InputData";

const IncompletedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isInputVisible, setInputVisible] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:1000/api/v2/get-incomplete-tasks", { headers });
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
  }, []);

  const toggleInputModal = () => setInputVisible(!isInputVisible);

  return (
    <div className="relative overflow-y-auto max-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Incomplete Tasks</h1>
      {tasks.length > 0 ? (
        <div className="p-4">
          <Cards
            tasks={tasks}
            toggleInputModal={toggleInputModal}
            setTasks={setTasks}
            setUpdatedTask={setUpdatedTask}
          />
          {loading && <p className="text-center text-gray-900">Loading...</p>}
        </div>
      ) : (
        <p className="text-center text-gray-900">No incomplete tasks available.</p>
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
  );
};

export default IncompletedTasks;