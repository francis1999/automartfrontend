 import React from 'react';
 import axios from 'axios';
import Nav from './Nav/Nav';
import passport from "../images/passport.jpeg"
import bell from "../images/bell.svg"
import envelope from "../images/envelope.svg"
import logow from "../images/logow.png"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { removeUserSession } from '../Session/userSession';

const Home = () => {
    const getToken = localStorage.getItem("token");
    const navigate = useNavigate();
    
    return (
        <>
        <div className='dashboard-header justify-content-between d-flex p-2'>
            <div className=''>
                <div className='dashboard-logo'><img src={logow} alt="logo"/></div>
            </div>
            <div className='right-nav justify-content-between d-flex'>
                <div className='ml'><img src={envelope} alt="Message Bell" /></div>
                <div className='ml'><img src={bell} alt="notification Bell" /></div>
                <div className='ml'><img src={passport} alt="profile Picture" /></div>
            </div>
        </div>
            <div className='d-flex justify-content-between'>

                <div className='right-div'>
                    <div><Link to="/dashboard/home">DASHBOARD</Link></div>
                    <div><Link to="/dashboard/addcar">Add Car</Link></div>
                    <div><Link to="/dashboard/allcars">View All Cars</Link></div>
                    <div><Link to="/dashboard/logout" onClick={handleLogout}>Logout</Link></div>
                </div>
                <div className='left-div'>hello left</div>

            {/*  <Nav/> */}
                
            </div>
        </>
    );
}

export default Home;
 