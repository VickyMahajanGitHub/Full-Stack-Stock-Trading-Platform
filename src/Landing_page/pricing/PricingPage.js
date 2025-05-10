// PricingPage.js
import React from "react";
import Hero from "./Hero"; // <-- import Hero
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

function PricingPage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
          <h1>Pricing</h1>
          <h3 className="text-muted fs-5 mt-3">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </h3>
        </div>

        <div className="row p-5 mt-5 text-center">
          <Hero
            imageURL="media/images/pricingEquity.svg"
            heading="Free Equity Investment"
            description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
          />

          <Hero
            imageURL="media/images/intradayTrades.svg"
            heading="Intraday and F&O Trades"
            description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />

          <Hero
            imageURL="media/images/pricingEquity.svg"
            heading="Free direct MF"
            description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
      </div>

      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;
