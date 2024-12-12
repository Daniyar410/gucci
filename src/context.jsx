import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)

    const [user, setUser] = useState(null)

    const login = (username) => {
        setUser({ username })
    }

    const logout = () => {
        setUser(null)
    }

    const isAuth = !!user

    const tooggleBurger = () => {
        setIsActive(!isActive)
    }


    const value = {
        isActive,
        tooggleBurger,
        user,
        login,
        logout,
        isAuth,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};