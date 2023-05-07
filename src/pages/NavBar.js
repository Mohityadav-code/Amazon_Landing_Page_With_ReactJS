import React from "react";
// import "./NavBar.css"
import logo from "./public/Colors-Amazon-Logo.jpg";
import flag from "./public/india-flag-png-xl.png";

const Navbar = () => {
  return (
    <div className="h-16 py-1 flex justify-around items-center bg-gray-900">
      <div className="hover:border-white border-0 p-2">
        <a href="/">
          <img width="100px" src={logo} alt="" />
        </a>
      </div>
      <div className="hover:border-white border-0 p-2 text-white">
        <a href="/">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill mr-1" // Add a margin to the right of the SVG
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span>Deliver to</span>
            </div>
            <div>India</div>
          </div>
        </a>
      </div>
      <div className="flex items-center">
        <select className="w-14 h-9 bg-gray-200">
          <option selected="selected">
            <button>All</button>{" "}
          </option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Amazon Pharmacy</option>
          <option>Appliances</option>
          <option>Apps &amp; Games</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Car &amp; Motorbike</option>
          <option>Clothing &amp; Accessories</option>
          <option>Collectibles</option>
          <option>Computers &amp; Accessories</option>
          <option>Deals</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Garden &amp; Outdoors</option>
          <option>Gift Cards</option>
          <option>Grocery &amp; Gourmet Foods</option>
          <option>Health &amp; Personal Care</option>
          <option>Home &amp; Kitchen</option>
          <option>Industrial &amp; Scientific</option>
          <option>Jewellery</option>
          <option>Kindle Store</option>
          <option>Luggage &amp; Bags</option>
          <option>Luxury Beauty</option>
          <option>Movies &amp; TV Shows</option>
          <option>Music</option>
          <option>Musical Instruments</option>
          <option>Office Products</option>
          <option>Pet Supplies</option>
          <option>Prime Video</option>
          <option>Same-Day Delivery</option>
          <option>Shoes &amp; Handbags</option>
          <option>Software</option>
          <option>Sports, Fitness &amp; Outdoors</option>
          <option>Subscribe &amp; Save</option>
          <option>Tools &amp; Home Improvement</option>
          <option>Toys &amp; Games</option>
          <option>Under ₹500</option>
          <option>Video Games</option>
          <option>Watches</option>
        </select>
        <input
          className="w-80 h-9 border-t-2 border-b-2 border-gray-300 border-r-0 border-l-0"
          placeholder="Search Amazon.in"
          type="text"
        />
        <a
          href="#"
          className="flex items-center justify-center h-9 w-10 p-2 border-2 border-gray-300 border-l-0 bg-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </div>
      <div className="flex items-center space-x-2 p-2 text-white">
        <img width="30px" src={flag} alt="" />
        <div className="flex items-center">
          {" "}
          {/* Add this wrapper div */}
          <a href="#" className="text-lg">
            EN
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down-fill ml-2" // Add a margin to the left of the SVG
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>{" "}
        {/* Close the wrapper div */}
      </div>

      <div className="hover:border-white border-0 text-white p-2">
        <a href="#">
          <div className="flex flex-col items-start">
            <p>Hello, sign in</p>
            <div className="flex items-center">
              <p className="text-xl font-semibold">Accounts & Lists</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill ml-2" // Add a margin to the left of the SVG
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="hover:border-white border-0 text-white p-2">
        <a href="/">
          <div>Returns &</div>
          <div>Orders</div>
        </a>
      </div>
      <div className="hover:border-white border-0 text-white p-2">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
