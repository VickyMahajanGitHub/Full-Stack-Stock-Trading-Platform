import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1>The TradeStack Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3  mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3  mt-5">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Assets management platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button className="p-2 heroButton   btn btn-primary fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
