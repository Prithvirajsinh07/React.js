import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BidList from "../components/BidList";

const DashboardPage = () => {
  const history = useNavigate();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      history.push("/login");
    }

    // Here, you would typically fetch bids from an API. 
    // For now, we're using static data.
    setBids([
      { bidNumber: 1, vehicleType: "Truck", origin: "City A", destination: "City B", date: "2025-01-31" },
      { bidNumber: 2, vehicleType: "Van", origin: "City C", destination: "City D", date: "2025-02-01" },
    ]);
  }, [history]);

  return (
    <div>
      <h2>Dashboard</h2>
      <BidList bids={bids} />
    </div>
  );
};

export default DashboardPage;
