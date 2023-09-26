"use client";
import React, { useState } from "react";
import Link from "next/link";
import classes from "./Header.module.css";
// import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes, FaLongArrowAltDown } from "react-icons/fa";
import logo from "../../public/donatendlogo-removebg.png";

export default function Header({
  products,
  contact,
  aboutUs,
  bioclimatic,
  retractable,
  glass,
  awnings,
  screensBlinds,
  lang,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  function removeHyphen(str) {
    return str.replace(/-/g, " ");
  }

  return (
    <nav>
      <ul className={classes.navbar}>
        <>
          <Link href="/">
            <img src={logo} alt="donatend logo" />
          </Link>
        </>
        <div
          className={
            isClicked
              ? `${classes.navLinks} ${classes.active}`
              : classes.navLinks
          }
        >
          <li className={classes.dropdown}>
            {products}
            <span className={classes.dropdownContent}>
              <Link href={`/${lang}/${bioclimatic}`}>
                {removeHyphen(bioclimatic)}
              </Link>
              <Link href={`/${lang}/${retractable}`}>
                {removeHyphen(retractable)}
              </Link>
              <Link href={`/${lang}/${glass}`}>{removeHyphen(glass)}</Link>
              <Link href={`/${lang}/${awnings}`}>{awnings}</Link>
              <Link href={`/${lang}/${screensBlinds}`}>{screensBlinds}</Link>
            </span>
          </li>
          <Link href={`/${lang}/${contact}`}>{contact}</Link>
          <Link href={`/${lang}/${aboutUs}`}>{removeHyphen(aboutUs)}</Link>
        </div>
        <div className={classes.mobile} onClick={handleClick}>
          <i>{isClicked ? <FaTimes /> : <FaBars />}</i>
        </div>
      </ul>
    </nav>
  );
}
