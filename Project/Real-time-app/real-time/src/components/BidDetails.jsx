import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const BidDetails = () => {
  const { bidNumber } = useParams();
  const [bid, setBid] = useState(null);

  useEffect(() => {
    // Fetch or mock the data based on bidNumber
    const mockBid = { bidNumber, vehicleType: "Truck", weight: "2000kg", origin: "City A", destination: "City B" };
    setBid(mockBid);
  }, [bidNumber]);

  if (!bid) return <div>Loading...</div>;

  return (
    <div>
      <h2>Bid Details</h2>
      <p>Bid Number: {bid.bidNumber}</p>
      <p>Vehicle Type: {bid.vehicleType}</p>
      <p>Weight: {bid.weight}</p>
      <p>Origin: {bid.origin}</p>
      <p>Destination: {bid.destination}</p>
    </div>
  );
};

export default BidDetails;
