import React from "react";
function Stats() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-5 ">
        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
          <h1 className="mb-5 fs-2">Trust with Confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 13+ crore customers trust TradeStack with ₹3.5+ lakh
            crore worth of equity investments.{" "}
          </p>

          <h2 className="fs-4 ">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 ">The TradeStack Universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investements in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 ">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "90%" }}
          />

          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            Explore our products{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
