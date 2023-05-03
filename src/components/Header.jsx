import React, { useState } from "react";
import "./Header.css";
import Usa from "../media/usa.png";
import France from "../media/france.png";
import { ChevronDown } from "react-feather";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleMouseEnter1 = () => {
    setShowDropdown1(true);
  };

  const handleMouseLeave1 = () => {
    setShowDropdown1(false);
  };
  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="navtop">
            {/* Offer Banner  */}
            <div className="offer">
              <span>FREE RETURNS STANDARD SHIPPING ORDERS $99+</span>
            </div>
            <div className="distnav">
              <div className="minnav">
                <span>MyAccount</span>
                <span>ContactUs</span>
                <span>Blog</span>
                <span>MyWishlist</span>
                <span>Cart</span>
                <span>Login</span>
              </div>
              {/* Language  */}
              <div class="separator"></div>
              <div className="lang">
                <div
                  className="parent-element"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button>
                    <div className="hicon" style={{ fontSize: 11 }}>
                      <img src={Usa} alt="" /> ENG{" "}
                      <ChevronDown style={{ height: "11px" }} />
                    </div>
                  </button>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <div className="hicon" style={{ color: "#777" }}>
                            <img src={Usa} alt="" /> ENG
                          </div>
                        </li>
                        <li>
                          <div className="hicon" style={{ color: "#777" }}>
                            <img src={France} alt="" /> FRA
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* Currency  */}
              <div
                className="appcurrency"
                style={{
                  marginLeft: "10px",
                }}
              >
                <div
                  className="parent-element"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <button>
                    <div className="hicon" style={{ fontSize: 11 }}>
                      USD <ChevronDown style={{ height: "11px" }} />
                    </div>
                  </button>
                  {showDropdown1 && (
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <div className="hicon" style={{ color: "#777" }}>
                            EUR
                          </div>
                        </li>
                        <li>
                          <div className="hicon" style={{ color: "#777" }}>
                            USD
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* TopIcons  */}
              <div class="separator"></div>

              <div className="topicons"></div>
            </div>
          </div>
          <div className="navbottom">Nav bottom</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
