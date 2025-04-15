import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import API from "../api";
const Signup = () => {
  const [Data, setData] = useState({ username: "", email: "", password: "", role: "employee" });
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const change = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!Data.username || !Data.email || !Data.password) {
        alert("All fields are required");
      } else {
        const response = await API.post("http://localhost:1000/api/v1/sign-up", Data);
        if (response.status === 200) {
          setData({ username: "", email: "", password: "", role: "employee" });
          alert("Successfully Signed Up");
          navigate("/login");
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-[98vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-blue-300">
      <h1 className="text-white text-3xl font-bold mb-4">Task Management System</h1>
      <div className="flex w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        
        {/* Left side - Image */}
        <div className="w-1/3 flex items-center justify-center p-4">
          <img src="/images/TaskZoneLogo.png" alt="Task Zone" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Right side - Signup Form */}
        <div className="flex flex-col items-center w-2/3 bg-gradient-to-b from-blue-600 to-blue-400 p-6 rounded-lg">
          <h2 className="text-white text-2xl font-semibold text-center mb-4">Signup</h2>
          <form onSubmit={submit} className="flex flex-col w-full max-w-sm">
            <input type="text" name="username" placeholder="Username" value={Data.username} onChange={change} className="bg-gray-100 text-gray-800 px-3 py-2 my-2 rounded" />
            <input type="email" name="email" placeholder="Email" value={Data.email} onChange={change} className="bg-gray-100 text-gray-800 px-3 py-2 my-2 rounded" />
            <input type="password" name="password" placeholder="Password" value={Data.password} onChange={change} className="bg-gray-100 text-gray-800 px-3 py-2 my-2 rounded" />
            <select name="role" value={Data.role} onChange={change} className="bg-gray-100 px-3 text-gray-800 py-2 my-2 rounded">
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
            <div className="w-full flex items-center justify-between mt-3">
              <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded shadow">Sign Up</button>
              <Link to="/login" className="text-white hover:text-gray-300">Already have an account? Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
