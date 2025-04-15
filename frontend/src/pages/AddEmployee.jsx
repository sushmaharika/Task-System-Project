import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({ username: '', email: '', password: '', role: 'employee' });

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.post('http://localhost:1000/api/v3/add-employee', employeeData, { headers });
      if (response.status === 200) {
        alert('Employee added successfully');
        setEmployeeData({ username: '', email: '', password: '', role: 'employee' });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Add Employee</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={employeeData.username}
          onChange={handleChange}
          className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employeeData.email}
          onChange={handleChange}
          className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={employeeData.password}
          onChange={handleChange}
          className="bg-gray-100 px-3 py-2 my-2 rounded text-gray-800"
        />
        <select
          name="role"
          value={employeeData.role}
          onChange={handleChange}
          className="bg-gray-100 px-3 text-gray-600 py-2 my-2 rounded text-gray-800"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;