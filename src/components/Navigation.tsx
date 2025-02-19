import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul
        className={`absolute md:static top-12 left-0 w-full bg-gray-900 md:bg-transparent p-4 md:p-0 transition-all md:flex md:gap-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li><Link to="/" className="block p-2 hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="block p-2 hover:text-gray-400">A Igreja</Link></li>
        <li><Link to="/services" className="block p-2 hover:text-gray-400">Cultos</Link></li>
        <li><Link to="/messages" className="block p-2 hover:text-gray-400">Mensagens</Link></li>
      </ul>
    </nav>
  );
}
