import React from 'react';

export default function Sale() {
  const products = [
    { title: "Pet Care UI Kit", price: "$30.00" },
    { title: "E-Commerce Web UI", price: "$39.00" },
    { title: "Finance App UI Kit", price: "$30.00" },
    { title: "Donation Mobile App", price: "$12.00" },
    { title: "Plants App UI", price: "$30.00" },
    { title: "Web Design System", price: "$48.00" },
    { title: "Premium Cab App", price: "$21.00" },
    { title: "Music Mobile App", price: "$29.00" },
    { title: "E-Commerce Landing Page", price: "$29.00" },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0f172a] shadow-md">
        <h1 className="text-2xl font-bold text-white">DQODE</h1>
        <div className="space-x-4">
          <button className="bg-[#14b8a6] hover:bg-[#0d9488] text-white px-4 py-1 rounded">Become a Seller</button>
          <button className="text-white border border-white px-4 py-1 rounded">Seller Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Accelerate your digital product design process</h2>
        <p className="text-lg text-gray-300 mb-6">With professional design templates, crafted by expert designers</p>
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for templates..."
            className="w-full px-4 py-2 rounded-l bg-white text-black"
          />
          <button className="bg-pink-600 px-6 py-2 rounded-r text-white">Search</button>
        </div>
      </section>

      {/* Latest Products */}
      <section className="px-6 pb-12">
        <h3 className="text-2xl font-semibold mb-6 text-pink-400">Latest products on DQODE</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-[#1e293b] p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="h-40 bg-gray-700 rounded mb-3"></div>
              <h4 className="text-lg font-semibold mb-1">{product.title}</h4>
              <p className="text-pink-400 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Seller CTA */}
      <section className="bg-[#0f172a] text-center py-16 px-6">
        <h3 className="text-2xl font-bold mb-4 text-white">Apply to be a DQODE seller</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          As a professional experience designer, you create assets and documentation that are the result of many hours of design and problem-solving. Apply today and sell your work to a global audience.
        </p>
        <button className="bg-[#14b8a6] hover:bg-[#0d9488] px-6 py-2 text-white rounded-lg">Apply as Seller</button>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] py-6 px-6 mt-8 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 DQODE. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
