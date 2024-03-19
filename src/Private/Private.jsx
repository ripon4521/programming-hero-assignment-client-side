import { SignIn, useUser } from "@clerk/clerk-react";

import { Navigate, useLocation } from "react-router-dom";



const Private = ({children}) => {
    const { isSignedIn, user, isLoaded } = useUser();
    let location = useLocation();
   
    if (user?.fullName) {
        return children;
    }
   
    return  <div className="flex justify-center items-center min-h-screen"> <SignIn state={{from:location}} replace></SignIn></div>
     
    
};

export default Private;