import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import API from '../api'
const InputData = ({ toggleInputModal, setTasks, updatedTask, setUpdatedTask }) => {
  // State to manage form data
  const [formData, setFormData] = useState({ title: "", desc: "" });

  // Populate the form if an existing task is being edited
  useEffect(() => {
    if (updatedTask) {
      setFormData({ title: updatedTask.title, desc: updatedTask.desc });
    }
  }, [updatedTask]);

  // Set up headers for API calls
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate inputs
    if (!formData.title || !formData.desc) {
      alert("All fields are required.");
      return;
    }

    try {
      if (updatedTask) {
        // Update an existing task
        const response = await API.put(
          `http://localhost:1000/api/v2/update-task/${updatedTask._id}`,
          formData,
          { headers }
        );

        if (response.status === 200) {
          setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) =>
              task._id === updatedTask._id ? { ...task, ...formData } : task
            );
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;
          });
        }
      } else {
        // Create a new task
        const response = await API.post(
          "http://localhost:1000/api/v2/create-task",
          formData,
          { headers }
        );

        if (response.status === 200) {
          setTasks((prevTasks) => {
            const newTasks = [...prevTasks, response.data.newTask];
            localStorage.setItem("tasks", JSON.stringify(newTasks));
            return newTasks;
          });
        }
      }

      resetForm();
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to save task.");
    }
  };

  // Reset form and close the modal
  const resetForm = () => {
    setFormData({ title: "", desc: "" });
    setUpdatedTask(null);
    toggleInputModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">
            {updatedTask ? "Edit Task" : "Add Task"}
          </h2>
          <button onClick={resetForm} className="text-white">
            <RxCross2 size={20} />
          </button>
        </div>

        {/* Form Inputs */}
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          name="desc"
          rows="4"
          placeholder="Task Description"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        ></textarea>

        {/* Submit Button */}
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white w-full"
          onClick={handleSubmit}
        >
          {updatedTask ? "Update Task" : "Add Task"}
        </button>
      </div>
    </div>
  );
};

export default InputData;
