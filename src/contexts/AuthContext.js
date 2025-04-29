import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();  

export const AuthProvider = ({children}) => {
const [token, setToken] = useState(null);
const [userData, setUserData] = useState(null)

return(
    <>

    <div>AuthProvider</div>

    </>
)

}


export default useAuth = () => useContext(AuthContext)