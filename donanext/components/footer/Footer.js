import classes from "./Footer.module.css";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdContactMail, MdInfoOutline } from "react-icons/md";
export default function Footer({
  contact,
  aboutUs,
  bioclimatic,
  retractable,
  glass,
  awnings,
  screensBlinds,
  rights,
  lang,
  donaPerde,
}) {

  function removeHyphen(str) {
    return str.replace(/-/g, " ");
  }

  return (
    <div className={classes.footer}>
      <div className={classes.footerTwo}>
        <div className={classes.footerTwoLeft}>
          <Link href={`/${lang}/${aboutUs}`}>
            <MdInfoOutline />
            {removeHyphen(aboutUs)}
          </Link>
          <Link href={`/${lang}/${contact}`}>
            <MdContactMail />
            {contact}
          </Link>
          <Link href={`/${lang}/${donaPerde}`}>
            <GiTheaterCurtains /> Dona Perde
          </Link>
        </div>
        <div className={classes.footerTwoMiddle}>
          <Link href={`/${lang}/${bioclimatic}`}>{removeHyphen(bioclimatic)}</Link>
          <Link href={`/${lang}/${retractable}`}>{removeHyphen(retractable)}</Link>
          <Link href={`/${lang}/${glass}`}>{removeHyphen(glass)}</Link>
          <Link href={`/${lang}/${awnings}`}>{awnings}</Link>
          <Link href={`/${lang}/${screensBlinds}`}>{screensBlinds}</Link>
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
        <p>{rights}</p>
      </div>
    </div>
  );
}
