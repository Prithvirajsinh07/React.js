import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const navigate = useNavigate(); // To handle navigation
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set user as logged out
    navigate('/login'); // Redirect to login page (or another page of your choice)
  };

  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';


  return (
    <>
     {/* Conditionally render header */}
     {!hideHeaderFooter && (
        <nav className="navbar bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {!isLoggedIn ? (
                <>
                  <Link to="/login">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {/* Conditionally render footer */}
      {!hideHeaderFooter && (
        <footer className="bg-gray-800 text-white p-4 mt-6">
          <div className="text-center">
            <p>&copy; 2025 My Store. All Rights Reserved.</p>
            <p className="text-sm">
              <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> | 
              <a href="#" className="text-blue-400 hover:underline"> Terms of Service</a>
            </p>
          </div>
        </footer>
      )}
    </>
  );
}

export default App;
