import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-80">

        <h2 className="text-2xl font-bold text-center mb-6">
          Job Portal Login
        </h2>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Email"
        />

        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          placeholder="Password"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;