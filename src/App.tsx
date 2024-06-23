import './App.css';
import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import Dashboard  from './secure/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './secure/User';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu /> 

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <BrowserRouter>
              <Routes>
                  <Route path='/' Component={Dashboard}/>
                  <Route path='/users' Component={Users}/>
              </Routes>
            </BrowserRouter>
          </main>
      </div>
    </div>
    </div>
  );
}

export default App;
