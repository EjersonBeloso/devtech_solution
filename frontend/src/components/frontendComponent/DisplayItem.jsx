import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayServices({ goal }) {
  const navigate = useNavigate();
  const OnBook = () => {
    navigate(`/contact`);
  };
  return (
    <div className="service-item">
      <div className="card mb-3 p-2 shadow">
        <img src={goal.image} className="card-img-top" alt="..." />
        <div className="card-body service-card">
          <h5 className="card-title service-card">{goal.service}</h5>
          <p className="card-text service-card">{goal.description}</p>
          <p className="card-price service-card">Php{goal.price}</p>
          <button className="close btn-dark m-2 hero-btn" onClick={OnBook}>
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
export default DisplayServices;
