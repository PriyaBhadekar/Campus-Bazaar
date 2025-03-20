import { useState } from 'react';
import SignupModal from "./pages/signup";


import './App.css'

export default function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => setIsSignupOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Sign - Up 
      </button>
      <SignupModal isOpen={isSignupOpen} setIsOpen={setIsSignupOpen} />
    </div>
  );
}

