
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './includes/header';



function App() {
  return (
    <div className="App">
      <Header/>

      <p>This ny aplication</p>
      <Button>submit</Button>
      
    </div>
  );
}

export default App;
