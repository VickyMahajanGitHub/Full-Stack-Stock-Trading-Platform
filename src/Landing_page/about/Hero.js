import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2  text-center ">
          We revolutionized the discount broking landscape in India.
          <br />
          Now, we're pushing boundaries with cutting-edge technology.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top text-muted " style={{ fontSize: "16px",  lineHeight: "1.9" }}>
        <div className="col-6 p-5">
          <p>
            We launched operations on the 15th of August, 2010, with a mission
            to eliminate every obstacle faced by traders and investors in
            India—be it high costs, lack of support, or outdated technology. The
            name TradeStack reflects our commitment to building a robust,
            barrier-free ecosystem for modern investors.{" "}
          </p>

          <p>
            Today, our innovative pricing models and fully in-house technology
            have positioned us among the leading forces in India's trading
            landscape.
          </p>

          <p>
            With over 1.6 crore+ clients placing billions of orders annually,
            the TradeStack platform powers more than 15% of all Indian retail
            trading volumes through its seamless and scalable investment
            ecosystem.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition to our core trading and investment services, TradeStack
            actively runs a range of open, online educational initiatives and
            community-driven programs designed to empower retail traders and
            investors across India.
          </p>

          <p>
            Through our fintech incubator and investment arm, <a href="#" className="a_link_about"> Rainmatter </a>, we’ve
            backed numerous fintech startups with the shared goal of deepening
            participation in India’s capital markets and fostering financial
            innovation.
          </p>

          <p>
            And we’re just getting started — there’s always something new
            brewing at TradeStack. Stay updated with our latest developments on
            the [blog], explore what the media is saying, or dive deeper into
            our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
