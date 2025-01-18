
import Login from './pages/Login'
import { Routes, Route, NavLink, Outlet, useLocation } from 'react-router-dom';
import Users from './pages/Users';
import Trash from './pages/Trash';
import TaskDetails from './pages/TaskDetails';
import './styles.css';
import Tasks from './pages/Tasks';

function Layout() {
  const user = "";
  const location = useLocation

  return user ? (
    <div className={`layout ${window.innerWidth >=768 ? 'layout-md' : ''}` }>
      <div className={`sidebar ${window.innerWidth >=768 ? 'sidebar-md' : ''}`}>
  {/* <Sidebar/> */}
      </div>
      {/* <MobileSidebar/> */}

      <div className="content">
        {/* <NavBar/> */}

      </div>
      <div className="padding padding-2xl">
        <Outlet/>


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
          <Route path="/" element={<NavLink to="/tasks" />} />
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
