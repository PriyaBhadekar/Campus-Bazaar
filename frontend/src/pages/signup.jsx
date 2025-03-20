import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

export default function SignupModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>

          <h2 className="text-xl font-semibold text-center text-gray-900">Create Your Account</h2>
          <p className="text-sm text-center text-gray-500 mt-1">Join us and start selling and buying today!</p>

          {/* Sign-Up Form */}
          <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="text-center text-gray-400 text-sm">or</div>

            {/* Google Sign-Up */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-red-500" />
              Sign Up with Google
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">Log In</span>
          </p>
        </div>
      </div>
    )
  );
}
