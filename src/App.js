
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './includes/header';
import Footer from './includes/footer';
import Index from './components';



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
            <Route exact path="/" name="Home Page" element={<Index/>}/>
            {/* <Route path="/business-automation" name="Business Automation" element={<Business/>}/> */}
        </Routes>
        <Footer/>
      </Router>
      

     
     
    </div>
  );
}

export default App;
