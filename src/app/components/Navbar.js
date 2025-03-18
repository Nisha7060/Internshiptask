"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Next.js App
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem href="/" text="Home" />
          <NavItem href="/dashboard" text="Dashboard" />
          {/* <NavItem href="/chat" text="Chat" />
          <NavItem href="/settings" text="Settings" /> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <NavItem href="/" text="Home" onClick={() => setMenuOpen(false)} />
          <NavItem href="/dashboard" text="Dashboard" onClick={() => setMenuOpen(false)} />
          {/* <NavItem href="/chat" text="Chat" onClick={() => setMenuOpen(false)} />
          <NavItem href="/settings" text="Settings" onClick={() => setMenuOpen(false)} /> */}
        </div>
      </div>
    </nav>
  );
}

// Reusable Nav Item Component
const NavItem = ({ href, text, onClick }) => (
  <Link
    href={href}
    className="block text-lg text-gray-700 hover:text-blue-600 transition duration-200"
    onClick={onClick}
  >
    {text}
  </Link>
);
