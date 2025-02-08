import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bidData } from "../data/bids";

const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    navigate("/");
    return null;
  }

  const handleRespond = (bidId) => {
    navigate(`/respond/${bidId}`);
  };

  const responseCount = (bidId) => {
    const responses = JSON.parse(localStorage.getItem("responses")) || [];
    return responses.filter((r) => r.bidId === bidId.toString()).length;
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Home
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => navigate("/bids")}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded w-full text-left"
            >
              Live Bids
            </button>
          </li>
          {/* Add more sidebar links here */}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Live Bids</h2>
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border">Bid No</th>
              <th className="p-3 border">Created By</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">From</th>
              <th className="p-3 border">To</th>
              <th className="p-3 border">Vehicle Type</th>
              <th className="p-3 border">Weight</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {bidData.map((bid) => (
              <tr key={bid.id} className="text-center border">
                <td className="p-3">{bid.id}</td>
                <td className="p-3">{bid.createdBy}</td>
                <td className="p-3">{bid.startDate}</td>
                <td className="p-3">{bid.from}</td>
                <td className="p-3">{bid.to}</td>
                <td className="p-3">{bid.vehicleType}</td>
                <td className="p-3">{bid.weight} Kg</td>
                <td className="p-3">
                  <span>{responseCount(bid.id)}</span>
                  <button
                    onClick={() => handleRespond(bid.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ml-2"
                  >
                    Respond
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleLogout}
          className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
