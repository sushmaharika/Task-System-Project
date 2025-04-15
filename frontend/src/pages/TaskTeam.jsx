// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TaskTeam = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [task, setTask] = useState({ title: '', desc: '' });

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const headers = {
//           id: localStorage.getItem("id"),
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//         const response = await axios.get('http://localhost:1000/api/v3/employees', { headers });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleAssignTask = async (e) => {
//     e.preventDefault();
//     try {
//       const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       };
//       const response = await axios.post('http://localhost:1000/api/v3/assign-task', {
//         employeeIds: selectedEmployees,
//         task,
//       }, { headers });
//       if (response.status === 200) {
//         alert('Task assigned successfully');
//         setSelectedEmployees([]);
//         setTask({ title: '', desc: '' });
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   const handleEmployeeChange = (e) => {
//     const value = Array.from(e.target.selectedOptions, option => option.value);
//     setSelectedEmployees(value);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Task Team</h1>
//       <form onSubmit={handleAssignTask} className="flex flex-col items-center">
//         <select
//           multiple
//           value={selectedEmployees}
//           onChange={handleEmployeeChange}
//           className="bg-gray-100 px-3 text-gray-600 py-2 my-2 rounded"
//         >
//           {employees.map((employee) => (
//             <option key={employee._id} value={employee._id}>
//               {employee.username}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={task.title}
//           onChange={(e) => setTask({ ...task, title: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         />
//         <textarea
//           placeholder="Task Description"
//           value={task.desc}
//           onChange={(e) => setTask({ ...task, desc: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         ></textarea>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
//           Assign Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskTeam;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TaskTeam = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [task, setTask] = useState({ title: '', desc: '' });

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const headers = {
//           id: localStorage.getItem("id"),
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//         const response = await axios.get('http://localhost:1000/api/v3/employees', { headers });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleAssignTask = async (e) => {
//     e.preventDefault();
//     try {
//       const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       };
//       const response = await axios.post('http://localhost:1000/api/v3/assign-task', {
//         employeeIds: selectedEmployees,
//         task,
//       }, { headers });
//       if (response.status === 200) {
//         alert('Task assigned successfully');
//         setSelectedEmployees([]);
//         setTask({ title: '', desc: '' });
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   const handleEmployeeChange = (e) => {
//     const value = Array.from(e.target.selectedOptions, option => option.value);
//     setSelectedEmployees(value);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Task Team</h1>
//       <form onSubmit={handleAssignTask} className="flex flex-col items-center">
//         <select
//           multiple
//           value={selectedEmployees}
//           onChange={handleEmployeeChange}
//           className="bg-gray-100 px-3 text-gray-600 py-2 my-2 rounded"
//         >
//           {employees.map((employee) => (
//             <option key={employee._id} value={employee._id}>
//               {employee.username}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={task.title}
//           onChange={(e) => setTask({ ...task, title: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         />
//         <textarea
//           placeholder="Task Description"
//           value={task.desc}
//           onChange={(e) => setTask({ ...task, desc: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         ></textarea>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
//           Assign Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskTeam;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TaskTeam = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [task, setTask] = useState({ title: '', desc: '' });

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const headers = {
//           id: localStorage.getItem("id"),
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//         const response = await axios.get('http://localhost:1000/api/v3/employees', { headers });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleAssignTask = async (e) => {
//     e.preventDefault();
//     try {
//       const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       };
//       const response = await axios.post('http://localhost:1000/api/v3/assign-task', {
//         employeeIds: selectedEmployees,
//         task,
//       }, { headers });
//       if (response.status === 200) {
//         alert('Task assigned successfully');
//         setSelectedEmployees([]);
//         setTask({ title: '', desc: '' });
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   const handleEmployeeChange = (e) => {
//     const value = Array.from(e.target.selectedOptions, option => option.value);
//     setSelectedEmployees(value);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Task Team</h1>
//       <form onSubmit={handleAssignTask} className="flex flex-col items-center">
//         <select
//           multiple
//           value={selectedEmployees}
//           onChange={handleEmployeeChange}
//           className="bg-gray-100 px-3 text-gray-600 py-2 my-2 rounded"
//         >
//           {employees.map((employee) => (
//             <option key={employee._id} value={employee._id}>
//               {employee.username}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={task.title}
//           onChange={(e) => setTask({ ...task, title: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         />
//         <textarea
//           placeholder="Task Description"
//           value={task.desc}
//           onChange={(e) => setTask({ ...task, desc: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         ></textarea>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
//           Assign Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskTeam;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TaskTeam = () => {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [task, setTask] = useState({ title: '', desc: '' });

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const headers = {
//           id: localStorage.getItem("id"),
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//         const response = await axios.get('http://localhost:1000/api/v3/employees', { headers });
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleAssignTask = async (e) => {
//     e.preventDefault();
//     try {
//       const headers = {
//         id: localStorage.getItem("id"),
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//       };
//       const response = await axios.post('http://localhost:1000/api/v3/assign-task', {
//         employeeIds: selectedEmployees,
//         task,
//       }, { headers });
//       if (response.status === 200) {
//         alert('Task assigned successfully');
//         setSelectedEmployees([]);
//         setTask({ title: '', desc: '' });
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   const handleEmployeeChange = (e) => {
//     const value = Array.from(e.target.selectedOptions, option => option.value);
//     setSelectedEmployees(value);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Task Team</h1>
//       <form onSubmit={handleAssignTask} className="flex flex-col items-center">
//         <select
//           multiple
//           value={selectedEmployees}
//           onChange={handleEmployeeChange}
//           className="bg-gray-100 px-3 text-gray-600 py-2 my-2 rounded"
//         >
//           {employees.map((employee) => (
//             <option key={employee._id} value={employee._id}>
//               {employee.username}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={task.title}
//           onChange={(e) => setTask({ ...task, title: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         />
//         <textarea
//           placeholder="Task Description"
//           value={task.desc}
//           onChange={(e) => setTask({ ...task, desc: e.target.value })}
//           className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
//         ></textarea>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
//           Assign Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskTeam;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from "../api";
const TaskTeam = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [task, setTask] = useState({ title: '', desc: '' });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const headers = {
          id: localStorage.getItem("id"),
          authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        const response = await API.get('http://localhost:1000/api/v3/employees', { headers });
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAssignTask = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.post('http://localhost:1000/api/v3/assign-task', {
        employeeIds: selectedEmployees,
        task,
      }, { headers });
      if (response.status === 200) {
        alert('Task assigned successfully');
        setSelectedEmployees([]);
        setTask({ title: '', desc: '' });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleEmployeeChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedEmployees(value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Task Team</h1>
      <form onSubmit={handleAssignTask} className="flex flex-col items-center">
        <select
          multiple
          value={selectedEmployees}
          onChange={handleEmployeeChange}
          className="bg-gray-100 px-3 text-gray-600 py-2 my-2 rounded"
        >
          {employees.map((employee) => (
            <option key={employee._id} value={employee._id}>
              {employee.username}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
        />
        <textarea
          placeholder="Task Description"
          value={task.desc}
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
          className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default TaskTeam;
