import React from 'react';
import { Link } from 'react-router-dom';
function Notfound() {
    return ( 
        <div className="container p-5">
        <div className="row text-center">
        
          <h1 classname="mt-5">404! Page Not Found</h1>
          <p>
            Sorry the page you are looking for does not exist.
          </p>
          <Link to="/">
          <button className="p-2 heroButton   btn btn-primary fs-5">
            Go to Home
          </button>
            </Link>
        </div>
      </div>
     );
}

export default Notfound;