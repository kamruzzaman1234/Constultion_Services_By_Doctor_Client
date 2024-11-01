import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged,
 signInWithEmailAndPassword, 
 signOut} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({children})=>{
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    const createSignUp = (email, password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email, password)
    }

    const SignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
         signOut(auth)
    }

    

const userHandleInfo = {createSignUp, user, loading , SignIn, logOut}
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser)
        console.log("Current User is", currentUser)
        if(currentUser){
            const loggedEmailUser = {email: currentUser.email}
            axios.post('http://localhost:6007/jwt', loggedEmailUser, {withCredentials: true})
            .then(res=>{
                console.log('Token Response', res.data)
            })
        }
    })
    return ()=> unsubscribe()
   },[])


    
    
    return(
        <div>
            <AuthContext.Provider value={userHandleInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider;