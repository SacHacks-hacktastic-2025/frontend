// src/pages/LoginPage.js
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl text-white mb-4">
          Daily Developer Retrospective
        </h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
