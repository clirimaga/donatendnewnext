import classes from "./Footer.module.css";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdContactMail, MdInfoOutline } from "react-icons/md";
export default function Footer({
  linkNames,
  linkPaths,
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
          <Link href={`/${lang}/${linkPaths.aboutUs}`}>
            <MdInfoOutline />
            {removeHyphen(linkNames.aboutUs)}
          </Link>
          <Link href={`/${lang}/${linkPaths.contact}`}>
            <MdContactMail />
            {linkNames.contact}
          </Link>
          <Link href={`/${lang}/${donaPerde}`}>
            <GiTheaterCurtains /> Dona Perde
          </Link>
        </div>
        <div className={classes.footerTwoMiddle}>
          <Link href={`/${lang}/${linkPaths.bioclimatic}`}>
            {removeHyphen(linkNames.bioclimatic)}
          </Link>
          <Link href={`/${lang}/${linkPaths.retractable}`}>
            {removeHyphen(linkNames.retractable)}
          </Link>
          <Link href={`/${lang}/${linkPaths.glass}`}>{removeHyphen(linkNames.glass)}</Link>
          <Link href={`/${lang}/${linkPaths.awnings}`}>{linkNames.awnings}</Link>
          <Link href={`/${lang}/${linkPaths.screensBlinds}`}>{linkNames.screensBlinds}</Link>
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
