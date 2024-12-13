import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Giriş</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Parola
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Parola"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Giriş
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
             Hesabın yok mu? <a href="/register" className="text-indigo-600 hover:text-indigo-700">Kayıt</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
