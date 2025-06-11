import React from "react";
function HeroSection() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          height="500px "
          width="85%"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <button className="p-2 heroButton   btn btn-primary fs-5">
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
