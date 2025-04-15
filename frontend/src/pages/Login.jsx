import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import API from "../api";
const Login = () => {
  const [Data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to homepage if already logged in
    }
  }, [isLoggedIn, navigate]);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      if (Data.username === "" || Data.password === "") {
        alert("All fields are required");
      } else {
        const response = await API.post("http://localhost:1000/api/v1/log-in", Data);
        if (response.status === 200) {
          setData({ username: "", password: "" });
          alert("Successfully Logged In");
          // Store token and user ID, dispatch login action
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("isAdmin", response.data.isAdmin);
          dispatch(authActions.login());
          navigate("/"); // Redirect to homepage after login
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-[98vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300">
      <h1 className="text-white text-3xl font-bold mb-4">Task Management System</h1>
      <div className="flex w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center w-1/3 p-4">
          <img src="/images/TaskZoneLogo.png" className="h-[150px] w-[150px]" alt="TaskBoard Logo" />
        </div>

        {/* Login Form Section */}
        <div className="flex flex-col items-center w-2/3 bg-gradient-to-b from-blue-600 to-blue-400 p-6 rounded-lg">
          <div className="text-white text-2xl font-semibold text-center mb-4">Login</div>
          <form onSubmit={submit} className="flex flex-col w-full max-w-sm">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="bg-gray-100 text-gray-800 px-3 py-2 my-2 rounded"
              value={Data.username}
              onChange={change}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-100 text-gray-800 px-3 py-2 my-2 rounded"
              value={Data.password}
              onChange={change}
            />
            <div className="w-full flex items-center justify-between mt-3">
              <button type="submit" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow">
                Login
              </button>
              <Link to="/signup" className="text-white hover:text-gray-300">
                Not Having An Account? Signup here
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 text-gray-200 text-sm">@Developed By Wealth Zone Technologies</div>
    </div>
  );
};

export default Login;
