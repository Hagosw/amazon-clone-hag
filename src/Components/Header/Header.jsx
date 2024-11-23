import React from 'react'
import "./Header.module.css";

function Header() {
  return (
    <section>
        <section>
            <div>
                {/*logo*/}
                <a href="">
                    <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon log'/>
                </a>
                {/* delivery */}
                <span>
                    {/* icon */}
                </span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            <div>
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='search product' />
                icon
            </div>
            <div>
                <img src="https://shorturl.at/373CO" alt="" />
                <section>
                    <option value="">EN</option>
                </section>
            </div>
        </section>
    </section>
  )
}

export default Header;