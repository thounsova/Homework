import { useContext, useState, useRef, useEffect, ChangeEvent } from "react";
import LogoImage from "../assets/REACH-removebg-preview.png";

import { ThemeContext } from "../../src/App/Ui/ThemeContext";

interface NavItem {
  name: string;
  link: string;
}

const NavItems: NavItem[] = [
  { name: "HOME", link: "/" },
  { name: "PRODUCT", link: "/product" },
  { name: "AB0UT", link: "/About" },
];

const mockSuggestions: string[] = [
  "bed time stories",
  "funny stories",
  "adventure stories",
  "mystery stories",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar can't be used outside a ThemeProvider");
  }

  const toggleMenu = (): void => setIsOpen(!isOpen);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (suggestion: string): void => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent): void => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
  }, []);

  return (
    <header className="fixed bg-white top-0 left-0 w-full bg-black-500 z-50">
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
                    className="text-lg font-semibold text-blue-500 hover:text-yellow-300 transition-colors duration-300 px-2 py-1 rounded-md"
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
              {/* Search */}

              {/* Theme Toggle */}

              {/* User Icon */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
