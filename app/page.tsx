import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 flex flex-col items-center justify-center text-white"
    >
      <header className="w-full flex justify-between items-center px-10 py-6 absolute top-0">
        <h1 className="text-2xl font-extrabold tracking-wide">MyCompany</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-gray-200 transition">Services</a>
          <a href="#about" className="hover:text-gray-200 transition">About</a>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
        </nav>
        <div className="space-x-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </header>

      <div className="text-center px-6 mt-20">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          AIUB Employee Management System
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Streamline your employee management with our intuitive platform.
        </p>
        <Link
          href="/register"
          className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-green-400 to-cyan-500 hover:opacity-90 transition font-semibold shadow-lg"
        >
          START YOUR JOURNEY!!
        </Link>
      </div>
    </div>
  );
}
