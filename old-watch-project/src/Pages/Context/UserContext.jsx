import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext(null);

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const saveUser = JSON.parse(localStorage.getItem("user"))
        if (saveUser) {
            setUser(saveUser)
        }
    }, []);

    useEffect(()=>{
        user ? localStorage.setItem("user", JSON.stringify(user)) : localStorage.removeItem("user")
    }, [user]);

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};