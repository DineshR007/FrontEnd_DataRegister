import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUser from './Editpages/Adduser';
import EditUser from './Editpages/EditUser';
import Viewuser from './Editpages/Viewuser';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/adduser" element={<AddUser />}></Route>
      <Route path="/edituser/:id" element={<EditUser />}/>
      <Route path="/viewuser/:id" element={<Viewuser />}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
