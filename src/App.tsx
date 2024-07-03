import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './secure/users/Users';
import Login  from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={'/'} index element={<RedirectToDashboard />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/login' element={<Login />} />
            <Route path={'/register'} element={<Register />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
