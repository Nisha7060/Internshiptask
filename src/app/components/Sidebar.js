"use client";
import Link from "next/link";
import { useState } from "react";
import { FiHome, FiMessageSquare, FiSettings, FiMenu } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`w-64 bg-white-100 p-6 transition-transform ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 md:block fixed md:relative`}>
      {/* Toggle Button (Mobile Only) */}
      <button className="md:hidden absolute top-4 right-4" onClick={() => setOpen(!open)}>
        <FiMenu size={24} />
      </button>

      <h2 className="text-xl font-bold  text-blue-600">Dashboard</h2>
      <nav className="mt-6 space-y-4">
        <Link href="/dashboard" className="flex items-center text-black p-2 hover:bg-black hover:text-white rounded-lg">
          <FiHome className="mr-2" /> Dashboard
        </Link>
        <Link href="/dashboard/chat" className="flex items-center text-black p-2 hover:bg-black hover:text-white rounded-lg">
          <FiMessageSquare className="mr-2" /> Chat
        </Link>
        <Link href="/dashboard/settings" className="flex items-center text-black p-2 hover:bg-black hover:text-white rounded-lg">
          <FiSettings className="mr-2" /> Settings
        </Link>
      </nav>
    </aside>
  );
}
