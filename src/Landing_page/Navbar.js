import React from "react";
function Navbar() {
  return (
    // <div className="container">
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container ">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/TradeStack_logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Support
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="#">
                  
              <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>

              
            </ul>
          </form>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;
