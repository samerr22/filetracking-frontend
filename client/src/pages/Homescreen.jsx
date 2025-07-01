import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homescreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to File Tracking System</h1>
        <p className="text-gray-600 mb-8">
          Please select your role to continue.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/employeesi')}
            className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            Employee
          </button>

          <button
            onClick={() => navigate('/Leardersign-in')}
            className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

