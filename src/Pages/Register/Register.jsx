import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = ()=>{
    return(
        <div className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="my-10 text-center">
                <h2 className="text-[40px] font-bold text-blue-900 underline">Register</h2>
                <p>Please Register and Choice Your Doctor</p>
            </div>
         
            <div className="flex justify-center gap-8">
                <div>
                    <img src="https://i.ibb.co.com/MRDcQxJ/registration.png" className="w-[358px] h-[300px]" alt="" />
                </div>
                <div className="border-2 rounded-lg shadow-lg p-7 border-blue-100">
                    <form action="">
                    <div className="form-control w-[450px] mb-6">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Name :</label>
                            <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered"/>
                        </div>
                        <div className="form-control w-[450px] mb-6">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Email :</label>
                            <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered"/>
                        </div>
                        <div className="form-control w-[450px] mb-6">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Password</label>
                            <input type="password"  className="input input-bordered" name="password" placeholder="Enter Your Password"/>
                        </div>
                        <div className="form-control w-[450px] mb-6">
                            <label htmlFor="" className="text-[18px] font-bold mb-2">Confirm Password</label>
                            <input type="password"  className="input input-bordered" name="confirmPassword" placeholder="Enter Your Confirm Password"/>
                        </div>
                        <div className="form-control w-[450px] mb-6">
                            <input type="submit"  className="bg-green-500 p-3 rounded-lg text-white" value="Login"/>
                        </div>
                        {/* <div className="mb-6">
                        <div className="divider divider-warning">
                            <button className="btn bg-blue-900 text-white"><FaGoogle className=""/>  Google</button>
                        </div>
                        </div> */}
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