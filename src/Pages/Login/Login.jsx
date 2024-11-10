import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, SignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const gProvider = new GoogleAuthProvider();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = () => {
    signOut(auth);
    signInWithPopup(auth, gProvider)
      .then(result => {
        const user = result.user;
        console.log("User Logged In:", user);
        navigate('/');
      })
      .catch(error => {
        console.error("Error in Google Sign-In:", error.message);
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then(result => {
        const LogInUser = result.user;
        console.log("Your Login Data is:", LogInUser);
        toast("Login Successfully");
        navigate(location?.state ? location?.state : '/');
      })
      .catch(error => {
        console.error("Error in Email Sign-In:", error.message);
      });
  };

  return (
    <div className="py-20  bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
        <ToastContainer />
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-extrabold underline text-blue-800">Login</h2>
          <p className="text-lg font-medium mt-2 text-gray-700">Please Login to Choose Your Doctor</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/MRDcQxJ/registration.png"
              className="w-[400px] h-[350px] rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              alt="Login Illustration"
            />
          </div>
          
          <div className="lg:w-1/2 max-w-lg mx-auto p-8 bg-white rounded-xl shadow-xl">
            <form onSubmit={handleLogIn}>
              <div className="form-control mb-6">
                <label htmlFor="email" className="text-lg font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full px-4 py-2 mt-2 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                />
              </div>

              <div className="form-control mb-6 relative">
                <label htmlFor="password" className="text-lg font-medium text-gray-700">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full px-4 py-2 mt-2 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                />
                <button
                  type="button"
                  className="absolute right-4 top-10 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              <div className="form-control mb-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-gradient-to-r from-green-400 to-teal-500 text-white w-full p-3 rounded-lg shadow-md hover:from-green-500 hover:to-teal-600 transition duration-300"
                />
              </div>

              <div className="text-center my-6">
                <div className="divider text-gray-600">OR</div>
                <button
                  onClick={handleEmail}
                  className="btn flex items-center justify-center bg-blue-600 text-white w-full p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  <FaGoogle className="mr-2" />
                  Continue with Google
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
