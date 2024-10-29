import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Login = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    const {user, SignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const auth = getAuth();
    const gProvider = new GoogleAuthProvider();

  
    const handleLogIn = (e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value
        SignIn(email, password)
        .then(result=> {
            const LogInUser = result.user
            console.log("Your Login Data is ", LogInUser)
            toast("Login Successfully")
            navigate(location?.state ? location?.state: '/' )

        })
    }
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmail = ()=>{
        signInWithPopup(auth, gProvider)
        console.log(signInWithPopup(auth, gProvider))
        .then(result=>{
          const user = result.user
          console.log(user)
          navigate( '/')
        })
        .catch(error=>{
          console.log(error.message)
        })
      }


    return(
        <div className="py-10 bg-gray-100">
            <div className="max-w-7xl mx-auto">
            <ToastContainer></ToastContainer>
                <div className="my-10 text-center">
                    <h2 className="text-[40px] font-bold text-blue-900 underline">Login</h2>
                    <p>Please Login and Choice Your Doctor</p>
                </div>
             
                <div className="flex flex-col lg:flex-row justify-center gap-8">
                    
                    <div>
                        <img src="https://i.ibb.co.com/MRDcQxJ/registration.png" className="w-[358px] h-[300px]" alt="" />
                    </div>
                    <div className="border-2 rounded-lg shadow-lg p-7 border-blue-100">
                        <form action="" onSubmit={handleLogIn}>
                            <div className="form-control  w-[250px] md:w-[450px] mb-6">
                                <label htmlFor="" className="text-[18px] font-bold mb-2">Email :</label>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered"/>
                            </div>
                            <div className="form-control  w-[250px] md:w-[450px] mb-6 relative">
                                <div className="flex flex-col">
                                <label htmlFor="" className="text-[18px] font-bold mb-2">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password"  className="input input-bordered" placeholder="Enter Your Password"/>
                                </div>
                                <div>
                              <button type="button" className="absolute right-5 top-12" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                            </button>
                              </div>

                            </div>
                            <div className="form-control  w-[250px] md:w-[450px] mb-6">
                                <input type="submit"  className="btn bg-green-500 p-3 rounded-lg text-white" value="Login"/>
                            </div>
                            <div className="mb-6">
                            <div className="divider divider-warning">
                                <button onClick={handleEmail} 
                                className="btn bg-blue-900 text-white"><FaGoogle className=""/>  Google</button>
                            </div>
                            </div>
                            <div className="text-center">
                                <p className="text-[16px] font-bold">Don't have an account ?<Link to="/register" className="text-success">Register</Link> </p>
                            </div>
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;