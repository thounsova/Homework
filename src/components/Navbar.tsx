import { useContext, useState } from "react";
import LogoImage from "../assets/images-removebg-preview.png";
import { ThemeContext } from "../../src/App/Ui/ThemeContext";

interface NavItem {
  name: string;
  link: string;
}

const NavItems: NavItem[] = [
  { name: "HOME", link: "/" },
  { name: "PRODUCT", link: "/product" },
  { name: "USER", link: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar can't be used outside a ThemeProvider");
  }

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <header className="fixed bg-white-500 top-0 left-0 w-full shadow-lg z-50 p-4 rounded-b-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={LogoImage}
              alt="Logo"
              className="w-32 sm:w-40 lg:w-48 transition-all duration-300 rounded-full shadow-lg"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-dark focus:outline-none rounded-md z-50"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6">
              <i
                className={`fas fa-bars absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
              ></i>
              <i
                className={`fas fa-times absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              ></i>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end flex-1">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NavItems.map((item, index) => (
                <li key={`nav-item-${index}`} className="relative">
                  <a
                    href={item.link}
                    className="text-lg font-semibold text-pink-600 hover:text-teal-500 transition-colors duration-300 px-4 py-2 rounded-lg"
                    aria-current={
                      item.link === window.location.pathname
                        ? "page"
                        : undefined
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white p-4 rounded-lg shadow-lg mt-2">
          <ul className="flex flex-col items-center gap-4">
            {NavItems.map((item, index) => (
              <li key={`mobile-nav-item-${index}`}>
                <a
                  href={item.link}
                  className="text-lg font-semibold text-pink-600 hover:text-teal-500 transition-colors duration-300 px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)} // Close menu after click
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
