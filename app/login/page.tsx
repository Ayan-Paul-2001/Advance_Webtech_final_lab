import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-white/80">
          Don't have an account?{" "}
          <Link href="/register" className="text-cyan-300 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
