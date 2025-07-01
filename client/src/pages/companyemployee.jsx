import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CompanyEmployee() {
  const [rawData, setRawData] = useState([]);
  const [DId, setformId] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const currentuserId = currentUser ? currentUser._id : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://test-vercel-neon-six.vercel.app/api/employee/getemp/${currentuserId}`);
        const data = await res.json();
        if (res.ok) {
          setRawData(data.Form); // Make sure it's .Form
        } else {
          setRawData([]);
        }
      } catch (err) {
        console.error('Error fetching activity data:', err);
      }
    };
    fetchData();
  }, [currentuserId]);



  const handleDeleteUser = async () => {
    try {
      const res = await fetch(
        `https://test-vercel-neon-six.vercel.app/api/employee/Edelete/${DId}`,
        {
          method: "DELETE"
        }
      );
      if (res.ok) {
        setRawData((prev) => prev.filter((emp) => emp._id !== DId));
        alert("Deleted");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#01081c] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Company Employees</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-white">
          <thead className="bg-blue-900 text-white uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Position</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-blue-800 divide-y divide-blue-700">
            {rawData.map((emp) => (
              <tr key={emp._id}>
                <td className="px-6 py-4">{emp.Name}</td>
                <td className="px-6 py-4">{emp.Position}</td>
                <td className="px-6 py-4">{emp.Email}</td>
                <td className="px-6 py-4 space-x-2">
                  <Link to={`/dashboard/admindashboard/${emp._id}`}state={{
    name: emp.Name,
    position: emp.Position,
    email: emp.Email,
  }} >

                      
                  <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm">
                    Track File
                  </button>
                  </Link>

                                    <Link to={`/dashboard/Employee/${emp._id}`}
    >
                  <button className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm">
                    Edit
                  </button>
                  </Link>
                  <button
                  onClick={() => {
                              setformId(emp._id);
                              handleDeleteUser();
                            }}
                  
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {rawData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6">
                  No employee data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
