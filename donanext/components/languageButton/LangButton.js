"use client";
import Link from "next/link";
import classes from "./LangButton.module.css";
import { usePathname } from "next/navigation";
import en from "@/public/images/english.png";
import de from "@/public/images/german.png";
import Image from "next/image";

export default function LanguageButton() {
  const completePath = usePathname();

  function getLastLetterIndex(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (/[a-zA-Z]/.test(str[i])) {
        return i;
      }
    }
    return -1;
  }

  const lastLetterIndex = getLastLetterIndex(completePath);
  const subPath = completePath.substring(3, lastLetterIndex + 1);
  const mainPath = completePath.substring(0, 3);

  return (
    <div className={classes.sidebar} title="Change Language">
      {mainPath === "/en" ? (
        <Link href={`/de/${subPath}`} className={classes.langButton}>
          <Image src={de} className={classes.img} alt="de" />
        </Link>
      ) : (
        <Link
          href={`/en/${subPath}`}
          className={classes.langButton}
          alt="en"
        >
          <Image src={en} className={classes.img} alt="en" />
        </Link>
      )}
    </div>
  );
}
