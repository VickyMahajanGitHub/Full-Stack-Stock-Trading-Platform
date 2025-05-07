import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com/demo"
        learnMore="https://kite.zerodha.com/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhakite3&hl=en_IN&gl=US"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1055011294"
      />

      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        Coin="https://coin.zerodha.com/demo"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhakite3&hl=en_IN&gl=US"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1055011294"
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://zerodha.com/products/api/"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        // tryDemo="https://kite.zerodha.com/demo"
        // learnMore="https://kite.zerodha.com/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhakite3&hl=en_IN&gl=US"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1055011294"
      />

      <p className="text-center fs-4 mt-5 p-5">Want to know more about our technology stack? Check out the TradeStack.tech blog.</p>

      <Universe />
    </>
  );
}

export default ProductPage;
