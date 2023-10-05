"use client";
import React, { useState } from "react";
import Link from "next/link";
import classes from "./Header.module.css";
// import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes, FaLongArrowAltDown } from "react-icons/fa";
import logo from "../../public/donatendlogo-removebg.png";
import Image from "next/image";

export default function Header({ linkNames, linkPaths, lang }) {
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
            <Image
              src={logo}
              alt="donatend logo"
              width={100}
              height={100}
              quality={100}
            />
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
            {linkNames.products}
            <span className={classes.dropdownContent}>
              <Link href={`/${lang}/${linkPaths.bioclimatic}`}>
                {removeHyphen(linkNames.bioclimatic)}
              </Link>
              <Link href={`/${lang}/${linkPaths.retractable}`}>
                {removeHyphen(linkNames.retractable)}
              </Link>
              <Link href={`/${lang}/${linkPaths.glass}`}>
                {removeHyphen(linkNames.glass)}
              </Link>
              <Link href={`/${lang}/${linkPaths.awnings}`}>
                {linkNames.awnings}
              </Link>
              <Link href={`/${lang}/${linkPaths.screensBlinds}`}>
                {linkNames.screensBlinds}
              </Link>
            </span>
          </li>
          <Link href={`/${lang}/${linkPaths.contact}`}>
            {linkNames.contact}
          </Link>
          <Link href={`/${lang}/${linkPaths.aboutUs}`}>
            {removeHyphen(linkNames.aboutUs)}
          </Link>
        </div>
        <div className={classes.mobile} onClick={handleClick}>
          <i>{isClicked ? <FaTimes /> : <FaBars />}</i>
        </div>
      </ul>
    </nav>
  );
}
