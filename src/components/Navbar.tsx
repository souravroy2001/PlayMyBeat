import { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/images/PlayMyBeat_light_Logo.png";
import svg from "../utils/svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-[#0F0F1F] shadow-md fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-50" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink className="text-white hover:text-orange-400 nav_tag" to="/">
            Home
          </NavLink>
          <NavLink
            className="text-white hover:text-orange-400 nav_tag"
            to="/how-it-work"
          >
            How It Work
          </NavLink>
          <NavLink
            className="text-white hover:text-orange-400 nav_tag"
            to="/about"
          >
            About
          </NavLink>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded-lg shadow_box font-medium"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <div dangerouslySetInnerHTML={{ __html: svg.close }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: svg.threeBar }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F0F1F] px-4 pb-4 flex flex-col gap-3">
          <NavLink
            className="text-white nav_tag"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="text-white nav_tag"
            to="/how-it-work"
            onClick={() => setMenuOpen(false)}
          >
            How It Work
          </NavLink>
          <NavLink
            className="text-white nav_tag"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded-lg text-center font-medium shadow_box"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(246, 148, 43, 1) 0%, rgba(224, 64, 94, 1) 50%, rgba(152, 29, 160, 1) 100%)",
            }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
