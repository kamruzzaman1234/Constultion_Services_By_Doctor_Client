import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const PrivetRouter = ({children})=>{
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(user.email)
    if(user?.email){
        return children
    }

    if (loading) {
        return <p>Loading...</p>; // যদি লোডিং হয় তাহলে লোডিং মেসেজ দেখাবে
    }
    
    if (!user) {
        return <Navigate state={location?.pathname} to="/login" />; // যদি user না থাকে তাহলে লগইন পেজে রিডাইরেক্ট করবে
    }
    
    
}
export default PrivetRouter;