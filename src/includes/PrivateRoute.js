import react from 'react';
import { Redirect, Route, route } from 'react-router-dom';
import { getToken } from './Controller';

const PrivateRoute=({component:Component, ...rest})=>{
    return(
        <Route
            {...rest}
            render={props=>{
                return getToken()? <Component{...props}/>
                :<Redirect to={{pathname:"components/index", state:{from:props.location}}}/>;
            }}
        />
    );
}
export default PrivateRoute;