import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition ${
      isActive
        ? "bg-sky-900 text-white shadow-md"
        : "border border-sky-200 text-sky-900 hover:bg-sky-900 hover:text-white"
    }`;

    return (
      <header className="fixed top-0 left-0 w-full z-50 border-b border-sky-100 bg-white shadow-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link to="/" onClick={handleNavClick}>
            <img
              src="/CommonImages/logo-removebg.png?v=2"
              alt="Hydro Canopy Analyst Logo"
              className="h-12 w-auto max-w-[180px] object-contain"
              onError={(e) => {
                e.currentTarget.src = "/favicon.png";
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-3 font-medium">
            <li>
              <NavLink to="/" className={navLinkClass}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                CONTACT
              </NavLink>
            </li>
          </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden rounded-xl border border-sky-200 bg-white px-3 py-1 text-sky-900 text-3xl shadow-sm cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>{isMenuOpen ? "✕" : "☰"}</span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mx-6 mb-4 rounded-2xl border border-sky-100 bg-white/95 px-6 py-4 space-y-4 shadow-lg animate-fadeIn">
          <Link
            to="/"
            onClick={handleNavClick}
            className="block rounded-xl bg-sky-900 px-4 py-2 text-white"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={handleNavClick}
            className="block rounded-xl border border-sky-900 px-4 py-2 text-sky-900"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="block rounded-xl border border-sky-900 px-4 py-2 text-sky-900"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
