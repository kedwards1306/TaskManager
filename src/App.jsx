
import { useContext } from "react";
import Login from './pages/Login'
import { Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom';
import Users from './pages/Users';
import Trash from './pages/Trash';
import TaskDetails from './pages/TaskDetails';
import './styles.css';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import { AuthContext } from './auth/Authentication';
import NavBar from "./components/NavBar";


function Layout() {
  // const {user} = useSelector(state => state.auth);
  const { user } = useContext(AuthContext);
  // const { user } = { user: "Alex" };
  const location = useLocation();

  console.log("user:");
  console.log(user);
  return user ? (
    <div className="layout">
    <div className="sidebar">
        <SideBar />
    </div>
    <div className="main-content">
        <div className="navbar">
            <NavBar />
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>
</div>
  ): (
      <NavLink to = "/login" state = {{ from: location }} replace/>
)
}

function App() {


  return (
    <main className='main '>
  <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<NavLink to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progess/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users/>} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

  </main>
  )
}

export default App
