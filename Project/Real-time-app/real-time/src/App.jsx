import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import BidDetails from "./components/BidDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/bid/:bidNumber" element={<BidDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
