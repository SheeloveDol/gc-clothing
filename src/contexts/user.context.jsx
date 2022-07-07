import { createContext, useState } from "react";


// The actual value that we want to access or access to
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})


// The actual component

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser };


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}