import react from 'react';
import { Redirect, Route, route } from 'react-router-dom';
import { getToken } from '../Session/userSession';

const PublicRoute=({component:Component, ...rest})=>{
    return(
        <Route
            {...rest}
            render={props=>{
                return !getToken()? <Component{...props}/>:<Redirect to={{pathname:"/dashboard/home"}}/>;
            }}
        />
    );
}
export default PublicRoute;