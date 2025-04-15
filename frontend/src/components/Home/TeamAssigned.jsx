import React from "react";

const TeamAssigned = ({ tasks, users }) => {
  const getUsernames = (assignedTo) => {
    return assignedTo.map(userId => {
      const user = users.find(user => user._id === userId);
      return user ? user.username : "Unknown User";
    }).join(", ");
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Team Assigned</h2>
      {tasks.map((task) => (
        <div key={task._id} className="bg-gray-800 p-4 rounded-md mb-4">
          <h3 className="text-lg md:text-xl text-white-900 font-semibold truncate">{task.title}</h3>
          <p className="text-white-900 mt-2 truncate">Assigned to: {getUsernames(task.assignedTo)}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamAssigned;