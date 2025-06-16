// src/pages/Login.tsx
import React from 'react';

export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-delwingz-off-white px-8">
        <h1 className="text-3xl font-bold mb-4 font-display delwingz-black">
          Get Delicious Platter in Your Home
        </h1>
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Create your account and enjoy delicious meals delivered right into you
        </p>
        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password (at least 8 characters)"
            className="w-full p-3 rounded border border-input focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full py-3 rounded text-white bg-delwingz-red hover:bg-primary/90 transition"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">I Have Platter Account</p>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/food.jpg')" }}
      />
    </div>
  );
}
