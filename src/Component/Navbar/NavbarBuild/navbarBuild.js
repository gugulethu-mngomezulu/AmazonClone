import React from "react";
import '../NavbarBuild/navbarBuild.css';
import { MdLocationOn, MdArrowDropDown } from 'react-icons/md';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import amazonlogo from '../../../assests/amazonLogo.png';
import SAFlag from "../../../assests/SouthAfricanFlag.png";

const NavbarBuild = () => {
  return (
    <div className="navbarbuild">
      {/* Left Section */}
      <div className="leftnavbarBuild">
        <div className="leftnavbarBuildlogo">
          <img className="amazon_logo" src={amazonlogo} alt="amazonlogo" />
          <span className="navbar_logo">.sa</span>
        </div>

        <div className="navbarBuildLocation">
          <div className="navbarBuildLocationImg">
            <MdLocationOn className="navbarBuildLocationimgIcon" />
          </div>
          <div className="navbarBuildLocationPlace">
            <div className="navbarBuildLocationTop">Delivering to Fundi 411022</div>
            <div className="navberBuildLocationBottom">Update Location</div>
          </div>
        </div>
      </div>

      {/* Center Search */}
      <div className="navbarBuildsearchBox">
        <div className="navbarBuildSearchBor">
          <div className="navbarBuildSearchAll">
            <div className="navbarBuildChanneltext">All</div>
            <MdArrowDropDown />
          </div>

          <input type="text" className="navbarBuildSearchboxtext" placeholder="Search Amazon.sa" />

          <div className="searchIconnavbarBuild">
            <FaSearch className="navbarBuildsearchboximgIcon" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightSidenavbarBuild">
        <div className="SouthAfricaFlag">
          <img src={SAFlag} className="SouthAfricanFlagImg" alt="SA Flag" />
          <div className="SAFlagnavbarBuild">
            .za
            <MdArrowDropDown className="SAFlagnavbardrop" />
          </div>
        </div>

        <div className="helloSignInnavbarBuild">
          <div className="helloTopnavbarBuild">Hello, User</div>
          <div className="SAnavbarbuildaccount">Accounts & Lists</div>
        </div>

        <div className="cartNavbarBuild">
          <FaShoppingCart className="cartNavbarBuildIcon" />
          <span className="cartNavbarBuildText">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarBuild;
