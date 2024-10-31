import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import  { AuthContext } from "../../../Provider/AuthProvider";
import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    const {user, createSignUp } = useContext(AuthContext)
    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value 
        const confirmPassword = form.confirmPassword.value 
        // const allUserInfo = {name, email, password, confirmPassword}
        // console.log("Your User is", allUserInfo)
        createSignUp (email, password)
        .then(result=>{
            const user = result.user 
            if(user.insertedId)
                console.log("Your User is",user);
                toast("Register Successfully")
                form.reset();
        })
        .catch(error=> console.log(error.message))
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-6 lg:mx-auto">
            <div className="my-10 text-center">
                <h2 className="text-[40px] font-bold text-blue-900 underline">Register</h2>
                <p>Please Register and Choice Your Doctor</p>
            </div>
         
            <div className="flex flex-col lg:flex-row justify-center gap-8">
            <ToastContainer></ToastContainer>
                <div>
                    <img src="https://i.ibb.co.com/MRDcQxJ/registration.png" className="w-[358px] h-[300px]" alt="" />
                </div>
                <div className="border-2 rounded-lg shadow-lg p-7 border-blue-100">
                    <form action="" onSubmit={handleRegister}>
                    <div className="form-control w-[250px] md:w-[450px] mb-6">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Name :</label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered"/>
                        </div>
                        <div className="form-control w-[250px] md:w-[450px] mb-6">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Email :</label>
                            <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered"/>
                        </div>
                        <div className="form-control w-[250px] md:w-[450px] mb-6 relative">
                            <div className="flex flex-col">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Password</label>
                            <input type={showPassword ? "text" : "password"} 
                             className="input input-bordered" name="password"
                              placeholder="Enter Your Password"/>
                            </div>
                               <div>
                              <button type="button" className="absolute right-5 top-12" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                            </button>
                              </div>
                        </div>
                        <div className="form-control relative w-[250px] md:w-[450px] mb-6">
                            <div className="flex flex-col">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Confirm Password</label>
                            <input type={showPassword ? "text" : "password"}  className="input input-bordered" name="confirmPassword" 
                            placeholder="Enter Your Confirm Password"/>
                            </div>
                              <div>
                              <button type="button" className="absolute right-5 top-12" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                            </button>
                              </div>
                        </div>
                        <div className="form-control w-[250px] md:w-[450px] mb-6">
                            <input type="submit"  className="btn bg-green-500 p-3 rounded-lg text-white" value="Login"/>
                        </div>
                        <div className="mb-6">
                        <div className="divider divider-warning">
                            <button to="" className="btn p-3 rounded-lg bg-blue-900 text-white"><FaGoogle className=""/>  Google</button>
                        </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[16px] font-bold">Already have an account Please?
                            <Link to="/login" className="text-success">Login Here</Link> </p>
                        </div>
                    </form>                        
                </div>
            </div>
        </div>
    </div>
    )
}
export default Register;