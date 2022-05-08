export const getUser = () => {
    //const userStr = sessionStorage.getItem("data");
    const userStr = localStorage.getItem("data");
    if (userStr) return JSON.parse(userStr);
    else return null;
}
export const getToken = () => {
    return sessionStorage.getItem("token") || null;
    return localStorage.getItem("token") || null;
    //sessionStorage.getItem("data");
}
export const setUserSession = (token, data) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("data", JSON.stringify(data));

    localStorage.setItem("token", token);
    localStorage.setItem("data", JSON.stringify(data));

}
export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("data");
    localStorage.removeItem("token");
    localStorage.removeItem("data");
}