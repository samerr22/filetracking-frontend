import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [compayId, setCompayId] = useState(null);
  console.log("id",compayId)
  const [companyFound, setCompanyFound] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  // 🧠 Fetch company when compayEmail changes
  useEffect(() => {
  const fetchCompany = async () => {
    const email = formData.compayEmail;
    if (!email) return;

    try {
      const res = await fetch(
        `https://test-vercel-neon-six.vercel.app/api/company/getemail/${email}`
      );
      const data = await res.json();
      console.log(data);

      if (!res.ok || !data || !data.Form || data.Form.length === 0) {
        setCompanyFound(false);
        setCompayId(null);
        return;
      }

      setCompanyFound(true);
      setCompayId(data.Form[0]._id); // ✅ Fixed line
    } catch (error) {
      setCompanyFound(false);
      setCompayId(null);
    }
  };

  fetchCompany();
}, [formData.compayEmail]);


  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!compayId) {
      setErrorMessage("Company email not recognized.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("http://localhost:3000/api/Learder/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, compayId }),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        setErrorMessage(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      setLoading(false);
      navigate("/");
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
        <h2 className="text-center text-white text-2xl font-serif mb-6">Leader Registration</h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Company Email */}
          <div>
            <h3 className="font-semibold text-white ml-1">Company Email</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Company Email"
              id="compayEmail"
              onChange={handlchange}
              required
            />
            {companyFound === false && (
              <p className="text-red-600 mt-1 text-sm">Company email not found.</p>
            )}
          </div>

          {/* Leader Name */}
          <div>
            <h3 className="font-semibold text-white ml-1">Leader Name</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Leader Name"
              id="LearderName"
              onChange={handlchange}
              required
            />
          </div>

          {/* Leader Position */}
          <div>
            <h3 className="font-semibold text-white ml-1">Leader Position</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Leader Position"
              id="LearderPosition"
              onChange={handlchange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-white ml-1">Email</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              id="Email"
              onChange={handlchange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="font-semibold text-white ml-1">Password</h3>
            <input
              className="bg-gray-900 border border-blue-500 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              id="password"
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

        {/* Switch to Sign In */}
        <div className="flex gap-2 text-sm mt-5 text-white justify-center">
          <span>Already have an account?</span>
          <Link to="/Leardersign-in" className="text-blue-400 hover:text-blue-500">
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
