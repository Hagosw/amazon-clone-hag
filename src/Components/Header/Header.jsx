import React from 'react'
import classes from "./Header.module.css";
import logo from "../../assets/icons/amazon-logo-white.png"; // Amazon logo image

function Header() {
    return (
        <section className={classes.header__outerContainer}>
          <header>
            <section className={classes.header__container}>
              {/* Logo */}
              <div className={classes.logo__container}>
                <Link to="/">
                  <img src={logo} alt="amazon logo" />{" "}
                  {/* Amazon logo with link to homepage */}
                </Link>
    
                {/* Delivery location */}
                <div className={classes.delivery}>
                  <span>
                    <SlLocationPin size={19} /> {/* Location pin icon */}
                  </span>
                  <div>
                    <p>Deliver to</p>
                    <span>Ethiopia</span> {/* Static delivery location */}
                  </div>
                </div>
              </div>
    
              {/* Search Bar */}
              <div className={classes.header__search}>
                {/* Category Dropdown */}
                <select
                  className={classes.header__search_category}
                  value={selectedCategory} // Current selected category
                  onChange={(e) => setSelectedCategory(e.target.value)} // Handle category change
                >
                  <option value="">All</option> {/* Default 'All' option */}
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                      {/* Capitalize category names */}
                    </option>
                  ))}
                </select>
    
                {/* Search Input */}
                <div className={classes.header__search_InputContainer}>
                  <input
                    type="text"
                    placeholder="Search Amazon"
                    value={searchTerm} // Current search term
                    onChange={handleSearchInputChange} // Handle search input change
                  />
                  {/* Search Suggestions */}
                  {suggestions.length > 0 && (
                    <ul className={classes.header__search_suggestionsList}>
                      {suggestions.map((product) => (
                        <li
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                        >
                          {product.title}{" "}
                          {/* Display product title in suggestions */}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Search Icon */}
                <BsSearch
                  className={classes.header__search_icon}
                  size={40}
                  onClick={handleSearch} // Trigger search on icon click
                />
              </div>
    
              {/* Right-side Links (Account, Orders, Cart) */}
              <div className={classes.order__container}>
                {/* Language Selector */}
                <a href="" className={classes.language}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
                    alt="USA Flag"
                  />
                  <select>
                    <option>EN</option> {/* Static language option */}
                  </select>
                </a>
    
                {/* Sign In / Sign Out */}
                <Link to={!user && "/auth"}>
                  <div>
                    {user ? ( // If the user is signed in
                      <>
                        <p>Hello, {user?.email?.split("@")[0]}</p>{" "}
                        {/* Greet the user */}
                        <span onClick={() => auth.signOut()}>Sign out</span>{" "}
                        {/* Sign out option */}
                      </>
                    ) : (
                      <>
                        <p>Hello, Sign In</p> {/* If no user, show Sign In */}
                        <span>Account & Lists</span>
                      </>
                    )}
                  </div>
                </Link>
    
                {/* Orders */}
                <Link to="/orders">
                  <p>returns</p>
                  <span>& Orders</span> {/* Link to user's orders */}
                </Link>
    
                {/* Cart */}
                <Link to="/cart" className={classes.cart}>
                  <BiCart size={35} /> {/* Cart icon */}
                  <span>{totalItem}</span> {/* Display total items in cart */}
                </Link>
              </div>
            </section>
          </header>
          <LowerHeader /> {/* Rendering the LowerHeader component */}
        </section>
      );
    }
    
    export default Header;
    