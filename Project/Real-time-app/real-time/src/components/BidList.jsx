import React from "react";
import { Link } from "react-router-dom";

const BidList = ({ bids }) => {
  return (
    <div>
      <h3>Live Bids</h3>
      <ul>
        {bids.map((bid) => (
          <li key={bid.bidNumber}>
            <Link to={`/bid/${bid.bidNumber}`}>
              {bid.origin} → {bid.destination} ({bid.vehicleType}) 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidList;
