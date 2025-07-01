import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";



export default function Employeeupdate() {
  const [formData, setFormData] = useState({});
 
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [validation, setValidation] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
 
    const currentuserId = currentUser ? currentUser._id : null;



  
 const {empId} = useParams();
  

   

 
  
  useEffect(() => {
    try {
      const fetchE = async () => {
        const res = await fetch(
          `https://test-vercel-neon-six.vercel.app/api/employee/getemp/${currentuserId}?upId=${empId}`
        );
        const data = await res.json();
        console.log("data", data);

        if (!res.ok) {
          console.log(data.message);
        
          return;
        }
        if (res.ok) {
          const selectedE = data.Form.find(
            (Info) => Info._id === empId
          );
          console.log(selectedE)
          if (selectedE) {
            setFormData(selectedE);
          }
        }
      };
      fetchE();
    } catch (error) {
      console.log(error.message);
    }
  }, [empId]);



  
 
  

  

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
      const res = await fetch(`https://test-vercel-neon-six.vercel.app/api/employee/Eupdate/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        console.log(data.message);
        return;
      }

      if (res.ok) {
       console.log(null);
        
        alert("sucsses ")
        navigate("");
        
      }
    } catch (error) {
      console.log("Something went wrong");
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
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                value={formData.Name}
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
           onChange={(e) => setFormData({ ...formData, Position: e.target.value })}
                value={formData.Position}
          />
        </div>
        <div>
          <h3 className="font-semibold text-white ml-1">Email</h3>
          <input
            className="bg-slate-800 bg-opacity-70 text-white border-white p-4 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="email"
            id="Email"
            onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                value={formData.Email}
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
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                value={formData.password}
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
