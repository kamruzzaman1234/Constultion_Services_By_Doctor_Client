import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, createSignUp } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    createSignUp(email, password)
      .then(result => {
        const user = result.user;
        if (user.insertedId)
          toast("Register Successfully");
        form.reset();
      })
      .catch(error => console.log(error.message));
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-20 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
        <div className="my-10 text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 underline">Register</h2>
          <p className="text-lg font-semibold text-gray-700">Please register to choose your doctor</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-12">
          <ToastContainer />
          
          <div className="flex-shrink-0">
            <img src="https://i.ibb.co.com/MRDcQxJ/registration.png" className="w-80 h-72" alt="Register" />
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg shadow-lg p-8">
            <form onSubmit={handleRegister}>
              <div className="form-control w-[250px] md:w-[450px] mb-6">
                <label className="text-lg font-semibold text-gray-800 mb-2">Name</label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full py-2 px-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="form-control w-[250px] md:w-[450px] mb-6">
                <label className="text-lg font-semibold text-gray-800 mb-2">Email</label>
                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full py-2 px-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div className="form-control w-[250px] md:w-[450px] mb-6 relative">
                <label className="text-lg font-semibold text-gray-800 mb-2">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered w-full py-2 px-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="button" className="absolute right-5 top-10 text-gray-500" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className="form-control w-[250px] md:w-[450px] mb-6 relative">
                <label className="text-lg font-semibold text-gray-800 mb-2">Confirm Password</label>
                <input type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm your password" className="input input-bordered w-full py-2 px-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="button" className="absolute right-5 top-10 text-gray-500" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className="form-control w-[250px] md:w-[450px] mb-6">
                <input type="submit" value="Register" className="btn bg-green-500 w-full py-3 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none" />
              </div>

              <div className="mb-6">
                <div className="divider text-gray-600">OR</div>
                <button className="btn bg-blue-900 text-white w-full py-3 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none">
                  <FaGoogle className="mr-2" /> Register with Google
                </button>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login Here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
