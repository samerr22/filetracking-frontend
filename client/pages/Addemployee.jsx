import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";



export default function Addemployee() {
  const [formData, setFormData] = useState({});
 
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validation, setValidation] = useState(null);
  const { currentUser } = useSelector((state) => state.user);


console.log("currer",currentUser)
  
 
  

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("https://test-vercel-neon-six.vercel.app/api/employee/employeeadd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, compayId: currentUser.compayId,LearderId:currentUser._id }),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        alert("ok")
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };



 


 

  return (
    <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center"
    style={{
      backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/fir-8506f.appspot.com/o/top-view-agenda-glasses-pencil.jpg?alt=media&token=6d98d4f5-3af6-4783-8899-9d27ba93abdc',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div className="bg-opacity-80 bg-none p-8 rounded-xl shadow-xl max-w-lg w-full">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
         <div>
          <h3 className="font-semibold text-white ml-1">Name</h3>
          <input
            className="bg-slate-800 bg-opacity-70 text-white border-white p-4 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
            id="Name"
            onChange={handlchange}
            required
          />
        </div>
        <div>
          <h3 className="font-semibold ml-1 text-white">Position</h3>
          <input
            className="bg-slate-800 bg-opacity-70 text-white border-white p-4 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Position"
            id="Position"
            onChange={handlchange}
          />
        </div>
        <div>
          <h3 className="font-semibold text-white ml-1">Email</h3>
          <input
            className="bg-slate-800 bg-opacity-70 text-white border-white p-4 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="email"
            id="Email"
            onChange={handlchange}
            required
          />
        </div>
        <div>
          <h3 className="font-semibold text-white ml-1">LoginId</h3>
          <input
            className="bg-slate-800 bg-opacity-70 text-white border-white p-4 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="password"
            id="password"
            onChange={handlchange}
            required
          />
        </div>
       
        
        
        <button
          className="bg-slate-900 text-white p-4 rounded-lg w-full h-12 hover:bg-blue-700 transition-all duration-300 focus:outline-none"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
  
     
  
      {errorMessage && (
        <p className="mt-5 text-red-600 bg-red-200 p-4 rounded-lg text-center">
          {errorMessage}
        </p>
      )}
    </div>
  </div>
  
  );
}
