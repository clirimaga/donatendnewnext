"use client";
import Link from "next/link";
import classes from "./LangButton.module.css";
import { usePathname } from "next/navigation";
import en from "@/public/images/english.png";
import de from "@/public/images/german.png";
import Image from "next/image";

export default function LanguageButton() {
  const completePath = usePathname();
  const realPath = completePath.substring(0, 3);
  // console.log(completePath);
  // console.log(realPath);
  return (
    <div className={classes.sidebar} title="Change Language">
      {realPath === "/en" ? (
        <Link href="/de" className={classes.langButton}>
          <Image src={de} className={classes.img} alt="de" />
        </Link>
      ) : (
        <Link href="/en" className={classes.langButton} alt="en">
          <Image src={en} className={classes.img} />
        </Link>
      )}
    </div>
  );
}
