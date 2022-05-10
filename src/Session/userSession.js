export const getUser = () => {
    //const userStr = sessionStorage.getItem("data");
    const userStr = localStorage.getItem("data");
    if (userStr) return JSON.parse(userStr);
    else return null;
}
export const getToken = () => {
    return localStorage.getItem("token") || null;
 
}
export const setUserSession = (token, data) => {
    localStorage.setItem("token", token);
    localStorage.setItem("data", JSON.stringify(data[0]._id));
}
export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("data");
    localStorage.removeItem("token");
    localStorage.removeItem("data");
}