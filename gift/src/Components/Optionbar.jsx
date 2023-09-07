import React from 'react'
import { Link } from "react-router-dom";

import { BiMap } from "react-icons/bi";

function Optionbar() {
        const option = [
          "Birthday",
          "Anniversary",
          "Flowers",
          "Chocolates",
          "Personalised",
          "Combos & Hampers",
        ];
  return (
    <div>
        <div className="row box1">
          <div className="col-8" id="optionbar1">
            <div className="row">
              {option.map((x) => (
                <div className="col">
                  <Link className="dropdown-item" to="#">
                    {x}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-8" id="optionbar2">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {option.map((x) => (
                  <li>
                    <Link className="dropdown-item" to="#">
                      {x}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-2">
            <BiMap className="usericon" />
            <span>Select City</span>
          </div>
        </div>
        
    </div>
    
  )
}

export default Optionbar