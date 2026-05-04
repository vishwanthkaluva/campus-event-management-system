import React, { useState } from "react";
import axios from "axios";

export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0b1220]">
      <form
        onSubmit={handleLogin}
        className="bg-[#0f172a] p-8 rounded-xl w-80 shadow-lg"
      >
        <h2 className="text-xl text-white mb-6 text-center font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-slate-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-slate-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-yellow-400 text-black py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}