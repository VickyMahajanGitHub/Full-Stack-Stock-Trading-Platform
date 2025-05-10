import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
        {/* Heading */}
        <div className="container ">
      <div className=" d-flex justify-content-between align-items-center py-3 " id="supportWrapper">
        <h4 mb-0>Support Portal</h4>
        <a href="" className=" m-5">Track Tickets</a>
      </div>
        </div>     

  {/* Main content area */}
  <div className="container py-5 p-5">
    <div className="row align-items-center">
      {/* Left side */}
      <div className="col-md-6 ">
        <h1 className="fs-4 mb-4">
          Search for an answer or browse help topics to create a ticket
        </h1>
        {/* Form with search icon */}
        <form className="mb-4 position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected ..."
          />
          <i
            className="fa fa-search position-absolute fa-lg"
            style={{
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "gray",
            }}
          ></i>
        </form>
        {/* Links below the search */}
        <div className="d-flex flex-wrap gap-3">
          <a href="#" className="">
            Track account opening
          </a>
          <a href="#" className="">
            Track segment activation
          </a>
          <a href="#" className="">
            Intraday margins
          </a>
          <a href="#" className="">
            Kite user manual
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="col-md-6">
        <h1 className="fs-4 mb-4">Featured</h1>
        <ol type="1">
          <li className="mb-3">
            <a href="#" className="">
              Change in mutual fund settlement cycle due to settlement holiday
              on account of Buddha Pournima on May 12, 2025
            </a>
          </li>
          <li>
            <a href="#" className="">
              Current Takeovers and Delisting – May 2025
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;
