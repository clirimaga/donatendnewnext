import classes from './Footer.module.css'
import Link from 'next/link'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdContactMail, MdInfoOutline } from "react-icons/md";
export default function Footer({
    contact,aboutUs,bioclimatic,retractable,glass,awnings,screensBlinds,rights
}) {
  return (
    <div className={classes.footer}>
      <div className={classes.footerTwo}>
        <div className={classes.footerTwoLeft}>
          <Link href="/about-us">
            <MdInfoOutline /> 
            {/* {lang === "en" ? "About Us" : "Über Uns"} */}
            {aboutUs}
          </Link>
          <Link href="/contact">
            <MdContactMail /> 
            {/* {lang === "en" ? "Contact" : "Kontakt"} */}
            {contact}
          </Link>
          <Link href="/dona-perde">
            <GiTheaterCurtains /> Dona Perde
          </Link>
        </div>
        <div className={classes.footerTwoMiddle}>
          <Link href="/bioclimatic-pergola">
            {/* {lang === "en" ? "Bioclimatic Pergola" : "Beschattung"} */}
            {bioclimatic}
          </Link>
          <Link href="/retractable-pergola">
            {/* {lang === "en" ? "Retractable Pergola" : "Pergola"} */}
            {retractable}
          </Link>
          <Link href="/glass-systems">
            {/* {lang === "en" ? "Glass Systems" : "Wintergarten"} */}
            {glass}
          </Link>
          <Link href="/awnings">
            {/* {lang === "en" ? "Awnings" : "Markisen"} */}
            {awnings}
          </Link>
          <Link href="/screens-blinds">
            {/* {lang === "en" ? "Screens and Blinds" : "Screen und Jalousie"} */}
             {screensBlinds}
          </Link>
        </div>
        <div className={classes.footerTwoRight}>
          <span>
            <a
              href="https://www.facebook.com/profile.php?id=100064036333620"
              target="_blank"
              rel="noreferrer"
              title="Facebook Profile"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/donatend/"
              target="_blank"
              rel="noreferrer"
              title="Instagram Profile"
            >
              <AiFillInstagram />
            </a>
          </span>
        </div>
      </div>
      <div className={classes.footerThree}>
        <h3>2023 © Dona Tend™</h3>
        <p>
          {/* {lang === "en" ? "All rights reserved." : "Alle Rechte vorbehalten."} */}
          {rights}
        </p>
      </div>
    </div>
  )
}
