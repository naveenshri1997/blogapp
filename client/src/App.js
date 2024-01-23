import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Web from './component/Web';
import { Routes,Route } from 'react-router-dom';
import { SingleBlog } from './component/SingleBlog';
import Dashboard from './component/Dashboard/Dashboard';
import Privateroute from './component/Privateroute';
import Adminlogin from './component/Dashboard/Adminlogin';
import AddPost from './component/Dashboard/Post/AddPost';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Web/>}></Route>
      <Route path='/blog/:id' element={<SingleBlog/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      {/* admin */}
      <Route path='/'element={<Privateroute/>}>
      <Route path='/dashboard' element={<Dashboard/>}></Route>      
      <Route path='addpost' element={<AddPost/>}></Route>
      </Route>

    </Routes>      
    </>
  );
}

export default App;
