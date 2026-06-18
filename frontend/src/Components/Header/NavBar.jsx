import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

    return (
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">

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
              <Link to="/" className="rounded-full bg-sky-900/90 px-5 py-2 text-sm tracking-wide text-white transition hover:bg-sky-800">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="rounded-full border border-sky-900 px-5 py-2 text-sm tracking-wide text-sky-900 transition hover:bg-sky-900 hover:text-white">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="rounded-full border border-sky-900 px-5 py-2 text-sm tracking-wide text-sky-900 transition hover:bg-sky-900 hover:text-white">
                CONTACT
              </Link>
            </li>
          </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-sky-900 text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span>{isMenuOpen ? "✕" : "☰"}</span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mx-6 rounded-2xl border border-sky-100 bg-white/95 px-6 py-4 space-y-4 shadow-lg animate-fadeIn">
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
