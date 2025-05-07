import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 ">
        <h1 className=" text-center  ">People</h1>
      </div>

      <div className="row p-3  text-muted ">
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/vicky.png"
            alt="Vicky Mahajan"
            className="img-fluid rounded-circle"
            style={{ width: "300px", height: "300px" }}
          />
          <h4 className="mt-3">Vicky Mahajan</h4>
          <p className="text-muted">Software Developer</p>
        </div>

        <div className="col-6 p-3">
          <p>
            Vicky Mahajan bootstrapped and founded TradeStack in 2010 with a
            clear mission: to break down the barriers he encountered during his
            own journey as a trader. What began as a personal challenge has
            grown into a platform that’s reshaping the Indian trading and
            investing experience.
          </p>
          Today, TradeStack stands as a symbol of innovation and accessibility
          in the Indian broking space.
          <p>
            When not building platforms or writing code, you’ll find him on the
            basketball court—that’s his zen.
          </p>
          Connect with Vicky:{" "}
          <a href="/" className="a_link_about">
            Homepage
          </a>{" "}
          /{" "}
          <a href="https://x.com/iVickyMahajan" className="a_link_about">
            X
          </a>{" "}
          /{" "}
          <a
            href="https://www.linkedin.com/in/vickymahajan-s55/"
            className="a_link_about"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
