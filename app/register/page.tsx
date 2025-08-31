"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>

        {/* Role Selector */}
        <div className="mb-6">
          <label className="block text-white mb-2">Register as</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="user" className="text-black">User</option>
            <option value="employee" className="text-black">Employee</option>
            <option value="admin" className="text-black">Admin</option>
            <option value="hr" className="text-black">HR</option>
          </select>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your password"
            />
          </div>

          {/* Employee Fields */}
          {role === "employee" && (
            <>
              <div>
                <label className="block text-white mb-2">Employee ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="e.g. EMP1234"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Department</label>
                <select className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option className="text-black">Engineering</option>
                  <option className="text-black">HR</option>
                  <option className="text-black">Marketing</option>
                  <option className="text-black">Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Role</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="e.g. Software Engineer"
                />
              </div>
            </>
          )}

          {/* Admin Fields */}
          {role === "admin" && (
            <>
              <div>
                <label className="block text-white mb-2">Admin Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter admin code"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Access Level</label>
                <select className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                  <option className="text-black">Super Admin</option>
                  <option className="text-black">Manager</option>
                  <option className="text-black">Support</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="e.g. +880 123 456 789"
                />
              </div>
            </>
          )}

          {/* HR Fields */}
          {role === "hr" && (
            <>
              <div>
                <label className="block text-white mb-2">HR ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="e.g. HR9876"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Department Managed</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="e.g. Engineering, Marketing"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Years of Experience</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="e.g. 5"
                />
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg text-white font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-white/80">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
