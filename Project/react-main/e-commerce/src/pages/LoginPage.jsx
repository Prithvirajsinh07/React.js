import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate if email and password are provided
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    axios.get('http://localhost:5000/users')
      .then(response => {
        const user = response.data.find(user => user.email === email && user.password === password);
        if (user) {
          setIsLoggedIn(true); // Set user as logged in
          navigate('/'); // Redirect to home page (or any page)
        } else {
          setError('Invalid email or password. Please try again.');
        }
      })
      .catch(err => {
        console.error('Error during login:', err);
        setError('Login failed, please try again later.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account? 
            <a href="/signup" className="text-blue-600 hover:underline"> Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

