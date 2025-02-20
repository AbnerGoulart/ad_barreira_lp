import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClassNames = (path: string) => {
    const isActive = location.pathname === path;
    return `block px-4 py-2 text-center ${
      isActive
        ? "bg-black text-white font-medium rounded-lg"
        : "hover:bg-gray-200 hover:rounded-lg hover:font-medium"
    }`;
  };

  return (
    <nav className="relative w-full">
      {/* Botão do menu - Aparece apenas no mobile */}
      <div className="md:hidden flex justify-end p-2">
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Container do menu (Mobile e Desktop) */}
      <div
        className={`absolute left-0 top-full w-full bg-gray-200 text-black overflow-hidden 
          transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
          md:opacity-100 md:max-h-full md:relative md:bg-transparent -screen`}
      >
        {/* Itens do menu */}
        <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-6 md:justify-end">
          <li>
            <Link to="/" className={getLinkClassNames("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClassNames("/about")}>
              A Igreja
            </Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClassNames("/services")}>
              Cultos
            </Link>
          </li>
          <li>
            <Link to="/messages" className={getLinkClassNames("/messages")}>
              Mensagens
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
