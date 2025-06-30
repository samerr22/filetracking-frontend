import { Spinner,  } from "flowbite-react";
import { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSilce";


export default function SignIn() {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });



  };



  

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      dispatch(signInStart());

      const res = await fetch("https://test-vercel-neon-six.vercel.app/api/leader/sigin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        dispatch(signInFailure(data.message));
        return; // Ensure you return here to prevent further actions
      }

       dispatch(signInSuccess(data));
      navigate("/dashboard/companyemp");
    } catch (error) {
      dispatch(signInFailure("An error occurred. Please try again."));
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 px-4">
      <div className="bg-slate-800 bg-opacity-70 backdrop-blur-md w-full max-w-lg rounded-3xl p-8 shadow-2xl border border-blue-600">
        
        {/* Optional: Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Title */}
        <div className="text-center text-white font-serif text-2xl mb-6">
          <h1>Leader Login</h1>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <h3 className="font-semibold text-white ml-1">Email</h3>
            <input
              className="bg-gray-900 border border-blue-500 p-4 rounded-lg w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="name@company.com"
              id="Email"
              onChange={handlchange}
            />
          </div>

          <div>
            <h3 className="font-semibold text-white ml-1">Password</h3>
            <input
              className="bg-gray-900 border border-blue-500 p-4 rounded-lg w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlchange}
            />
          </div>

          <button
            className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg w-full transition-all duration-300 focus:outline-none"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "SIGN IN"}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="flex gap-2 text-sm mt-5 text-white justify-center">
          <span>Don't have an account?</span>
          <Link to="/dashboard/companyemp" className="text-blue-400 hover:text-blue-500">
            Sign Up
          </Link>
        </div>
        {/** compnayregister  */}

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-5 text-red-600 bg-red-200 bg-opacity-60 p-4 rounded-lg text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  
  );
}
