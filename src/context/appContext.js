import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";


// ********************************************
// Creating Global Context State
// ********************************************
const AppContext = createContext();
export const AppCtx = () => useContext(AppContext);

// **********************************
// Serving Context Provider
// **********************************
const AppContextProvider = ({ children }) => {

    // redux data 
    const userData = useSelector(state => state.user.data);
    
    const [userDetails, setUserDetails] = useState(null);

    const updateUserProfile = (data) => {
        setUserDetails(data);
    }

    useEffect(() => {
        updateUserProfile(userData);
    }, [userData]);

    
    return (
        <AppContext.Provider
            value={{
                userDetails,
                updateUserProfile
            }}
        >
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;