import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './secure/users/Users';
import Login  from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import { Roles } from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={'/'} index element={<RedirectToDashboard />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />} />
            <Route path={'/register'} element={<Register />}/>
            <Route path='/users/*' element={<Users />}/>
            <Route path='/users/create' element={<UserCreate />}/>
            <Route path='/users/:id/edit' element={<UserEdit match/>}/>
            <Route path='/roles' element={<Roles />}/>
            <Route path='/roles/create' element={<RoleCreate />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
