import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineUser, } from "react-icons/ai";
import {MdShoppingCart} from 'react-icons/md'
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
                <MdShoppingCart className="usericon" />
                <span>Cart</span>
              </div>
              <div className="me-3"></div>
              <div>
                <AiOutlineUser className="usericon" />
                <span>Login / Register</span>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Homenav