import './App.css';
import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import Dashboard  from './secure/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './secure/User';
import Login  from './public/Login';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
