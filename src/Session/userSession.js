import { useState } from "react";


export const getUser = () => {
    //const userStr = sessionStorage.getItem("data");
    const userStr = localStorage.getItem("data");
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    const pickToken=localStorage.getItem("token");
    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${pickToken}`
    };
    console.log(headers)
    
}

export const setUserSession = (token, data) => {
    localStorage.setItem("token", token);
    localStorage.setItem("data", JSON.stringify(data));
}
export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("data");
    localStorage.removeItem("token");
    localStorage.removeItem("data");
}