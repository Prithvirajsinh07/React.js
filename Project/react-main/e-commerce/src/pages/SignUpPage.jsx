// src/pages/SignUpPage.jsx
import { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false); // Loading state for the button
  const [error, setError] = useState(null); // Error state for feedback

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before new submit

    axios.post('http://localhost:5000/users', user)
      .then(response => {
        // On successful sign-up, you can redirect or show a success message
        window.location.href = '/login'; // Example: redirect to login page
      })
      .catch(err => {
        setError('Something went wrong. Please try again later.');
      })
      .finally(() => {
        setLoading(false); // Set loading to false after API call
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'} focus:outline-none transition duration-300`}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        {/* Redirect to login page if already have an account */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
