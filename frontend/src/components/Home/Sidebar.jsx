import React, { useEffect, useState } from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { IoExit } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import axios from "axios";
import API from '../../api'
const Sidebar = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const headers = {
          id: localStorage.getItem("id"),
          authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        const response = await API.get("http://localhost:1000/api/v1/user-details", { headers });
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const userLinks = [
    { title: "All tasks", icon: <CgNotes />, link: "/" },
    { title: "Important tasks", icon: <MdLabelImportant />, link: "/importanttasks" },
    { title: "Completed tasks", icon: <FaCheckDouble />, link: "/completedtasks" },
    { title: "Incomplete tasks", icon: <TbNotebookOff />, link: "/incompletedtasks" },
  ];

  const adminLinks = [
    { title: "Projects and Team", icon: <CgNotes />, link: "/" },
    { title: "Add Employee", icon: <MdLabelImportant />, link: "/add-employee" },
    { title: "Assign Tasks", icon: <FaCheckDouble />, link: "/task-team" },
  ];

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear();
    navigate("/signup");
  };

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div
      className="bg-gray-900 text-white fixed top-0 left-0 h-full flex flex-col justify-between p-6 transition-all duration-300 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 border-2 border-white"
    >
      {/* User Details Section */}
      <div className="flex flex-col items-center mb-6 text-center">
        <img 
          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" 
          className="rounded-full border border-white h-16 w-16 mb-2"
          alt="User Avatar"
        />
        <h2 className="text-lg font-bold">{userDetails.username}</h2>
        <p className="text-sm text-gray-300">{userDetails.email}</p>
        <p className="text-sm font-semibold text-gray-400">{isAdmin ? "Admin" : "Employee"}</p>
      </div>

      {/* Sidebar Links Section */}
      <div className="flex flex-col space-y-4">
        {links.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className="flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300"
            aria-label={item.title}
          >
            {item.icon}
            <span className="ml-4 hidden sm:block">{item.title}</span>
          </Link>
        ))}
      </div>

       {/* TaskZone Image */}
       <div className="flex justify-center mt-6">
        <img 
          src="/images/TaskZoneLogo.png" 
          alt="TaskZone Logo" 
          className="h-20 w-auto"
        />
      </div>

      {/* Logout Section */}
      <div className="mt-6">
        <button
          onClick={logout}
          className="flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300"
          aria-label="Logout"
        >
          <IoExit className="text-white" />
          <span className="ml-4 hidden sm:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
