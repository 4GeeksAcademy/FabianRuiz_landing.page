import React from "react";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark  ">
      <div className="container">
        <a className="navbar-brand text-light fw-bold" href="#">Start Boostrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex justify-content-end">
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active text-light " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;