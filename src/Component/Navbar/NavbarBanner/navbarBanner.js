import React from "react";
import './navbarBanner.css';
import { FaBars } from "react-icons/fa";

const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "Amazon miniT" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "Customer Service" },
    { name: "Fashion" },
    { name: "Home & Kitchen" }
  ];

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optnavbarBanner">
          <FaBars className="menuIcon" />
          <div className="allmenuicon">All</div>
        </div>

        {options.map((item, ind) => (
          <div className="optnavbarBanner" key={ind}>
            <div className="allmenuicon">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="navbarBannerRightSide">
      </div>
    </div>
  );
};

export default NavbarBanner;
