import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* Logo Section */}
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </a>

            {/* Delivery Location */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select name="categories" id="categories">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search" />
            <button className={classes.searchButton}>
              <BsSearch size={25} />
            </button>
          </div>

          {/* Order Section */}
          <div className={classes.order__container}>
            <a href="#" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"
                alt="US flag"
              />
              <select name="language" id="language">
                <option value="EN">EN</option>
              </select>
            </a>

            <a href="#">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>

            <a href="#">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            <a href="#" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
