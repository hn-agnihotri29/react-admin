import './App.css';
import Dashboard  from './secure/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './secure/User';
import Login  from './public/Login';
import Register from './public/Register';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/login' element={<Login />} />
            <Route path={'/register'} element={<Register />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
