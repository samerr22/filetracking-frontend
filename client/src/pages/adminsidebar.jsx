import { Outlet, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSilce";
import { FaUser, FaStickyNote, FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from "react";

export default function Sidbar() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [companyInfo, setCompanyInfo] = useState(null);

  const currentCompanyId = currentUser ? currentUser.compayId : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentCompanyId) {
          const res = await fetch(`https://test-vercel-neon-six.vercel.app/api/company/getcompany/${currentCompanyId}`);
          const data = await res.json();
          if (res.ok) {
            setCompanyInfo(data.details);
          }
        }
      } catch (err) {
        console.error('Error fetching company data:', err);
      }
    };
    fetchData();
  }, [currentCompanyId]);


  //done
  const handleSignout = async () => {
    try {
      const res = await fetch("https://test-vercel-neon-six.vercel.app/api/Learder/signout", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        dispatch(signoutSuccess());
        alert("Signed out successfully");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-[#111827] p-4 lg:p-6 min-h-screen shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold tracking-wide text-blue-400">Admin Dashboard</h1>
          <button
            onClick={handleSignout}
            className="bg-red-600 px-3 py-1 rounded text-sm font-semibold hover:bg-red-700"
          >
            <FaSignOutAlt />
          </button>
        </div>

        {/* User Info */}
        {currentUser && (
          <div className="flex items-center gap-3 mb-6">
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-400"
            />
            <div>
              <p className="font-semibold text-lg">{currentUser.LearderName}</p>
              <p className="text-sm text-gray-400">{currentUser.LearderPosition}</p>
            </div>
          </div>
        )}

        {/* Company Info */}
        {companyInfo && (
          <div className="mb-6 p-3 rounded-lg bg-blue-950 bg-opacity-50 shadow-inner">
            <h2 className="text-sm uppercase font-semibold text-blue-300 mb-1">Company Info</h2>
            <p className="text-md font-medium text-white">{companyInfo.companyName}</p>
            <p className="text-sm text-gray-300">📞 {companyInfo.companyPhone}</p>
            <p className="text-sm text-gray-300">📧 {companyInfo.companyEmail}</p>
            <p className="text-sm text-gray-300">📍 {companyInfo.address}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="space-y-4">
          <NavLink
            to="/dashboard/Addemployee"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg font-medium ${
                isActive ? "text-blue-400" : "text-white hover:text-blue-300"
              }`
            }
          >
            <FaUser /> New Employee
          </NavLink>

          <NavLink
            to="/dashboard/companyemp"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg font-medium ${
                isActive ? "text-blue-400" : "text-white hover:text-blue-300"
              }`
            }
          >
            <FaStickyNote /> All Employee
          </NavLink>
        </div>

        
      <div className="mt-6">
  <a
    href="https://drive.google.com/file/d/1RJcZg2yG7ZkWxlsfwnTp4V4t3TZy0NVx/view?usp=sharing"
    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
    download
  >
    Download Desktop App
  </a>
</div>

      </aside>


      {/* Main Content */}
      <main className="flex-1 bg-gray-950 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
