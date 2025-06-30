export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow">
        <div className="text-xl font-bold">Time Doctor</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Product</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Solutions</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Demo</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Understand how work really happens</h1>
        <p className="max-w-2xl mb-6">Get the visibility you need to improve productivity and support your teams with trusted workforce analytics software.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Get Demo</button>
        <img src="/placeholder-hero.png" alt="Hero" className="mt-8 w-full max-w-4xl" />
      </section>

      {/* Content Sections */}
      <section className="p-12 grid gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-2">See the complete picture of your workforce</h2>
          <p className="mb-4">Spot unusual work patterns, bottlenecks, and opportunities to optimize processes.</p>
          <img src="/placeholder-analytics.png" alt="Analytics" className="w-full max-w-4xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Manage remote teams with confidence</h2>
          <img src="/placeholder-remote.png" alt="Remote teams" className="w-full max-w-4xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Easily integrate with 60+ apps</h2>
          <img src="/placeholder-integrations.png" alt="Integrations" className="w-full max-w-4xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Company insights to maximize profits</h2>
          <img src="/placeholder-insights.png" alt="Insights" className="w-full max-w-4xl" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">What our customers say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <p>“Time Doctor led to a 30% increase in productivity.”</p>
            <span className="block mt-2 font-bold">Boost Media</span>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>“We optimize cost-efficiency and productivity.”</p>
            <span className="block mt-2 font-bold">Personiv</span>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>“It improves every employee’s productivity.”</p>
            <span className="block mt-2 font-bold">Spark</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-gray-900 text-white mt-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Products</h3>
            <ul>
              <li><a href="#" className="hover:underline">Time Doctor</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Use Case</h3>
            <ul>
              <li><a href="#" className="hover:underline">Workforce Analytics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center">© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
