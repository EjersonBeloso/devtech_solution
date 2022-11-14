import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="hero-section">
      <div className="container d-flex hero">
        <div className="hero-heading w-100 ">
          <h1 className="hero-subhead">We Repair and Rebuild your PC</h1>
          <div>
            <Link to="/contact" className="hero-btn link">
              Contact us
            </Link>
          </div>
        </div>
        <div className="w-100 hero-image-container">
          <img
            className="hero-img"
            src="https://www.techinsurance.com/-/jssmedia/industry-and-professions/imagery/computer-repair/illustration_computer-repair-new.png?h=625&iar=0&w=950&rev=e647f8e17e854f5bab0a004dc70d8059"
            alt="hero.png"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
