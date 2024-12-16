import React, { useState } from "react";
import "./header.css";

import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jewelique</div>

      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#collection">Collection</a>
        <a href="#shop">Shop</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
      </nav>

      <div className="header-icons">
        <div className="card">
          <RiSearchLine className="card-icon" />
        </div>

        <div className="card">
          <HiOutlineShoppingBag className="card-icon" />
        </div>

        <div className="card">
          <IoPersonOutline className="card-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
