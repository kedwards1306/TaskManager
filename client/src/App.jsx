
import { useContext, useRef, useState,useEffect } from "react";
import Login from './pages/Login'
import { Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom';
import Users from './pages/Users';
import Trash from './pages/Trash';
import TaskDetails from './pages/TaskDetails';
import './styles.css';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import { AuthContext } from './auth/Authentication';
import NavBar from "./components/NavBar";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";



function Layout() {
  const navigate = useNavigate();
  // const {user} = useSelector(state => state.auth);
  const { user } = useContext(AuthContext);
  // const { user } = { user: "Alex" };
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  });

  console.log("user:");
  console.log(user);
  return user ? (
    <div className="layout">
      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        variant="temporary" // Makes the Drawer slide in from the side
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "grey",
          },
        }}
      >
        <SideBar />
      </Drawer>
      <div className="main-content">
        <MobileSidebar />
        <div className="navbar">
          <NavBar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  ) : null;
}
const MobileSidebar = () => {
  const { isSidebarOpen,toggleSidebar } = useContext(AuthContext);
  const mobileMenuRef = useRef(null);


  const closeSidebar = () => {
    toggleSidebar(false);
  };
  return <>


  </>

}



function App() {


  return (
    <main className='main '>
  <Routes>
      <Route element={<Layout />}>
          <Route index path="/" element={<NavLink to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progess/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users/>} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

  </main>
  )
}

export default App
