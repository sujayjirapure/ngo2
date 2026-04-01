import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

// Navigation links data
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Goals", path: "/goals" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
         <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src={logo}
            alt="Sarvesamanah Foundation Logo"
            className="h-24 w-24 object-contain border-4 border-primary rounded-lg"
          />
          <span className="text-primary-foreground font-heading text-xl font-bold hidden sm:block">
            Sarvesamanah Foundation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-primary-foreground font-body font-medium text-sm uppercase tracking-wide hover:opacity-80 transition-opacity ${
                  location.pathname === link.path
                    ? "border-b-2 border-primary-foreground pb-1"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-6 py-3 text-primary-foreground font-body font-medium text-sm uppercase tracking-wide hover:bg-primary-foreground/10 transition-colors ${
                    location.pathname === link.path ? "bg-primary-foreground/10" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
