
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './includes/footer';
import Index from './components';
import Home from './dashboard/home';
import Addcar from './dashboard/addcar';
import Viewcars from './dashboard/viewcars';



function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
              <Route exact path="/" name="Home Page" element={<Index/>}/>
              <Route path="/dashboard/home" name="Home Page" element={<Home/>}/>
              <Route path="/dashboard/addcar" name="Home Page" element={<Addcar/>}/>
              <Route path="/dashboard/allcars" name="Home Page" element={<Viewcars/>}/>

              {/* <Route path="/business-automation" name="Business Automation" element={<Business/>}/> */}
        </Routes>
      </Router>
      

     
     
    </div>
  );
}

export default App;
