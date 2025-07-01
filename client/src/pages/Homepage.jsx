export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Understand how work really happens</h1>
        <p className="max-w-2xl mb-6">Get the visibility you need to improve productivity and support your teams with trusted workforce analytics software.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">Get Demo</button>
        <img src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?_gl=1*db063q*_ga*MTU5NjQzMDU0NC4xNzQ1NTk4NTE0*_ga_8JE65Q40S6*czE3NTEzNDkzNzQkbzQkZzEkdDE3NTEzNDk0NDgkajUxJGwwJGgw" alt="Hero" className="mt-8 w-full max-w-4xl" />
      </section>

      {/* Content Sections */}
      <section className="p-12 grid gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-2">See the complete picture of your workforce</h2>
          <p className="mb-4">Spot unusual work patterns, bottlenecks, and opportunities to optimize processes.</p>
          <img src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?_gl=1*db063q*_ga*MTU5NjQzMDU0NC4xNzQ1NTk4NTE0*_ga_8JE65Q40S6*czE3NTEzNDkzNzQkbzQkZzEkdDE3NTEzNDk0NDgkajUxJGwwJGgw" alt="Analytics" className="w-full max-w-4xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Manage remote teams with confidence</h2>
          <img src="/placeholder-remote.png" alt="Remote teams" className="w-full max-w-4xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Easily integrate with 60+ apps</h2>
          <img src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?_gl=1*db063q*_ga*MTU5NjQzMDU0NC4xNzQ1NTk4NTE0*_ga_8JE65Q40S6*czE3NTEzNDkzNzQkbzQkZzEkdDE3NTEzNDk0NDgkajUxJGwwJGgw" alt="Integrations" className="w-full max-w-4xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Company insights to maximize profits</h2>
          <img src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?_gl=1*db063q*_ga*MTU5NjQzMDU0NC4xNzQ1NTk4NTE0*_ga_8JE65Q40S6*czE3NTEzNDkzNzQkbzQkZzEkdDE3NTEzNDk0NDgkajUxJGwwJGgw" alt="Insights" className="w-full max-w-4xl" />
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

      
    </div>
  );
}
