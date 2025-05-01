import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-6 ">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <p className="mb-3">
            Versity, the largest online stock market education book in the world
            covering everything from the basics of advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5 mb-3">
            {" "}
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
