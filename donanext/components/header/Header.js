'use client'
import React, { useState , useContext } from "react";
// import { NavLink, useLocation } from "react-router-dom";
import Link from "next/link";
import classes from "./Header.module.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes, FaLongArrowAltDown } from "react-icons/fa";
import donatend from "@/public/donatend.png"
// import { useSelector } from "react-redux";

export default function Header({
  products,contact,aboutUs,bioclimatic,retractable,glass,awnings,screensBlinds
}) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <nav>
      <ul className={classes.navbar}>
        <div>
          <Link href="/">
            <img src={donatend} alt="donatend logo" />
          </Link>
        </div>
        <div
          className={
            // classes.navLinks
            isClicked
              ? `${classes.navLinks} ${classes.active}`
              : classes.navLinks
          }
        >
          <li className={classes.dropdown}>
          {products}
           {/* <FaLongArrowAltDown className={classes.arrowUnder}/> */}
            <span className={classes.dropdownContent}>
              <Link href={`/${bioclimatic}`}>{bioclimatic}</Link>
              <Link href={`/${retractable}}`}>{retractable}</Link>
              <Link href={`/${glass}}`}>{glass}</Link>
              <Link href={`/${awnings}}`}>{awnings}</Link>
              <Link href={`/${screensBlinds}}`}>{screensBlinds}</Link>
            </span>
          </li>
          
          <Link href={`/${contact}}`}>{contact}</Link>
          <Link href={`/${aboutUs}}`}>{aboutUs}</Link>
        </div>
        <div className={classes.mobile} onClick={handleClick}>
          <i>{isClicked ? <FaTimes /> : <FaBars />}</i>
        </div>
      </ul>
    </nav>
  );
}
