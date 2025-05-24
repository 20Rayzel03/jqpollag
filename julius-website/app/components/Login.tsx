"use client";

import { useState } from "react";
import Link from "next/link";
import Background from "./Background";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Bitte alle Felder ausfüllen");
      return;
    }
    console.log("Anmeldung mit:", { username, password });
  };

  return (
    <Background>
    <div className="bg-bg_Login bg-center bg-cover bg-no-repeat h-[100vh] w-[100vw]">
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="relative z-10 w-full max-w-md p-8 rounded-lg border border-white/30 backdrop-blur-md bg-gray-800">
          <form onSubmit={handleSubmit} className="flex flex-col text-white">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

            <div className="relative mb-6 border-b-2 border-gray-300">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-transparent h-10 outline-none text-white peer"
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-base transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:translate-y-[-100%] peer-valid:top-0 peer-valid:text-sm peer-valid:translate-y-[-100%]"
              >
                E-Mail / Benutzername
              </label>
            </div>

            <div className="relative mb-6 border-b-2 border-gray-300">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent h-10 outline-none text-white peer"
              />
              <label
                htmlFor="password"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-base transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:translate-y-[-100%] peer-valid:top-0 peer-valid:text-sm peer-valid:translate-y-[-100%]"
              >
                Passwort
              </label>
            </div>

            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="accent-white" />
                <span>Angemeldet bleiben?</span>
              </label>
              <Link href="#" className="hover:underline">
                Passwort vergessen?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 rounded hover:bg-white/20 hover:text-white border-2 border-transparent hover:border-white transition"
            >
              Log In
            </button>

            {error && (
              <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
            )}

            <div className="mt-8 text-center text-sm text-white">
              Noch keinen Account?{" "}
              <Link href="/register" className="underline hover:text-gray-300">
                Registrieren
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div></Background>
  );
}
