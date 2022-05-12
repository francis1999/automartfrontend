
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './components';
import Home from './dashboard/home';
import Addcar from './dashboard/addcar';
import Viewcars from './dashboard/viewcars';
import Singlecar from './dashboard/singlecar';
import { getToken } from './Session/userSession';
import { useEffect } from 'react';
import PrivateRoute from './includes/PrivateRoute';
import PublicRoute from './includes/PublicRoute';
import Singlecarpage from './components/singlecar';



function App() {
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
  }, [])
  return (
    <div className="App">
      <Router>
        
        <Routes>
              {/* <PublicRoute exact path="/" element={<Index/>} /> */}
              <Route exact path="/" element={<Index/>} />
             {/* <PrivateRoute path="/dashboard/home" element={<Home/>} /> */}
              {/* <Route exact path="/" name="Home Page" element={<PublicRoute component={Index}/>}/> */}
              <Route path="/dashboard/home" name="Home Page" element={<Home/>}/>
              <Route path="/dashboard/addcar" name="Add Car" element={<Addcar/>}/>
              <Route path="/dashboard/allcars" name="Home Page" element={<Viewcars/>}/>

              <Route path="/dashboard/allcars/singlecar/:_id" element={<Singlecar/>} />
              <Route path="/singlecar/:_id" element={<Singlecarpage/>} />
              {/* <Route path="/dashboard/allcars" name="Home Page" element={<Viewcars/>}/> */}

              {/* <Route path="/business-automation" name="Business Automation" element={<Business/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
