import React from "react";
import { MdOutlineMenu } from "react-icons/md"; 
import classes from "./Header.module.css"; 


function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      {/* Container for lower header items */}
      <ul>
        {/* List of navigation options */}
        <li>
          {/* Menu icon and "All" option */}
          <MdOutlineMenu /> {/* Menu icon */}
          <p>All</p> {/* "All" label next to the icon */}
        </li>
        {/* Other navigation links */}
        <li>Today's Deals</li> {/* Static link for "Today's Deals" */}
        <li>Customer Services</li> {/* Static link for "Customer Services" */}
        <li>Registry</li> {/* Static link for "Registry" */}
        <li>Gift Cards</li> {/* Static link for "Gift Cards" */}
        <li>Sell</li> {/* Static link for "Sell" */}
      </ul>
    </div>
  );
}

export default LowerHeader; 
