import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function SignUp() {
  const [formData, setFormData] = useState({});
  console.log(formData)
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validation, setValidation] = useState(null);

 
 
  

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("https://test-vercel-neon-six.vercel.app/api/company/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };



 


 

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 flex items-center justify-center px-4">
      <div className="bg-slate-800 bg-opacity-70 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-blue-600">


        <div className="mb-6">
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
        
        {/* Title */}
        <h2 className="text-center text-white text-2xl font-serif mb-6">Company Registration</h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Company Name */}
          <div>
            <h3 className="font-semibold text-white ml-1">Company Name</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Company Name"
              id="companyName"
              onChange={handlchange}
              required
            />
          </div>

          {/* Company Email */}
          <div>
            <h3 className="font-semibold text-white ml-1">Company Email</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="name@company.com"
              id="companyEmail"
              onChange={handlchange}
              required
            />
          </div>

          {/* Company Phone */}
          <div>
            <h3 className="font-semibold text-white ml-1">Company Phone</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Phone"
              id="companyPhone"
              onChange={handlchange}
              required
            />
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-white ml-1">Address</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Address"
              id="address"
              onChange={handlchange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg w-full transition duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        {/* Link to Leader Register */}
        <div className="flex gap-2 text-sm mt-5 text-white justify-center">
          <span>Already have an account?</span>
          <Link to="/LearderRe" className="text-blue-400 hover:text-blue-500">
            Sign In
          </Link>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-5 text-red-600 bg-red-200 p-4 rounded-lg text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  
  );
}
