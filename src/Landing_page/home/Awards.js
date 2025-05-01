import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 p-5 mt-5">
          <h1>Trusted Stock broker in India</h1>
          <p className="mb-5">
            We are the largest stock broker in India with 2+ million clients
            contributes to over 15% all the volumes in the country daily by
            trading and investing in:{" "}
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bond & Govt. Securities</li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
