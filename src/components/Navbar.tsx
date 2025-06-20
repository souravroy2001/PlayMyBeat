import { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/images/PlayMyBeat_light_Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0F0F1F] shadow-md fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-50" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink className="text-white hover:text-orange-400 nav_tag" to="/">Home</NavLink>
          <NavLink className="text-white hover:text-orange-400 nav_tag" to="/how-it-work">How It Work</NavLink>
          <NavLink className="text-white hover:text-orange-400 nav_tag" to="/about">About</NavLink>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded-full shadow_box font-medium"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
            }}
          >
            Login
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F0F1F] px-4 pb-4 flex flex-col gap-3">
          <NavLink className="text-white nav_tag" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink className="text-white nav_tag" to="/how-it-work" onClick={() => setMenuOpen(false)}>How It Work</NavLink>
          <NavLink className="text-white nav_tag" to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded-full text-center font-medium shadow_box"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
            }}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
