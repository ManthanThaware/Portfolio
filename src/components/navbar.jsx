import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Manthan<span className="text-blue-400">.dev</span>
        </h2>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-3">
          <a href="#home" className="block" onClick={() => setOpen(false)}>Home</a>
          <a href="#skills" className="block" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" className="block" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}