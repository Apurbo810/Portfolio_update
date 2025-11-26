"use client";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-base-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl">Apurbo</h1>

        <ul className="flex items-center gap-6 opacity-80">
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}
