import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import Logo from "../Static/Gift_Logo.png";

function Homenav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid me-auto mainnav1">
          <div>
            <Link className="navbar-brand" to="/">
              <img className="logoimg" src={Logo} alt="sorry" />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <div className="me-auto"></div>
            <div className="me-auto">
              <form className="d-flex" role="search">
                <input
                  style={{ width: "400px" }}
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn searchbutton" type="submit">
                  <BiSearch />
                </button>
              </form>
            </div>
            <div>
              <ul>
                <li type="None">
                  <MdShoppingCart className="usericon" />
                </li>
                <li type="None"className="lifont">Cart</li>
              </ul>
            </div>
            <div className="me-3"></div>
            <div>
              <ul>
                <li type="None" >
                  <FaUserCircle className="usericon" />
                </li>
                <li type="None" className="lifont">Hi Guest</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Homenav;
