import React, { useEffect } from 'react';
import { useLocation, Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';

import Home from './pages/Home';
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import CompletedTasks from './pages/CompletedTasks';
import IncompletedTasks from './pages/IncompletedTasks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AddEmployee from './pages/AddEmployee';
import TaskTeam from './pages/TaskTeam';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const backgroundImages = {
    '/': '/images/alltaskslarge.png',
    '/importanttasks': '/images/importantlarge.png',
    '/completedtasks': '/images/completedlarge.png',
    '/incompletedtasks': '/images/incompletedlarge.png',
  };

  const backgroundImage = backgroundImages[location.pathname] || 'default-image-url';

  useEffect(() => {
    if (localStorage.getItem('id') && localStorage.getItem('token')) {
      dispatch(authActions.login());
    } else if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/signup') {
      navigate('/signup');
    }
  }, [dispatch, isLoggedIn, navigate, location.pathname]);

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <div
      className="text-white h-screen p-2 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Routes>
        <Route exact path="/" element={<Home isAdmin={isAdmin} />}>
          {isAdmin ? (
            <>
              <Route index element={<AdminDashboard />} />
              <Route exact path="/add-employee" element={<AddEmployee />} />
              <Route exact path="/task-team" element={<TaskTeam />} />
            </>
          ) : (
            <>
              <Route index element={<AllTasks />} />
              <Route exact path="/importanttasks" element={<ImportantTasks />} />
              <Route exact path="/completedtasks" element={<CompletedTasks />} />
              <Route exact path="/incompletedtasks" element={<IncompletedTasks />} />
            </>
          )}
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;