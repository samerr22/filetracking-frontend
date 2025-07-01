// Footer.jsx
export default function Footer() {
  return (
    <footer className="p-12 bg-gray-900 text-white">
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
      <p className="mt-8 text-center text-sm">© 2025 Time Doctor. All rights reserved.</p>
    </footer>
  );
}
