'use client'
import Image from "next/image";
import classes from "./AccomplishedProjects.module.css";
import de from "@/public/images/german.png";
import ch from "@/public/images/ch.png";
import au from "@/public/images/au.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function AccomplishedProjects({ text }) {
  // const cssVariables = {
  //     '--best-color': 'blueviolet',
  //   };
  //   const inlineStyles = {
  //     backgroundColor: 'var(--best-color)',
  //   };
  // const percentage = 85;
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <section className={classes.dachRegion} data-aos="fade-up">
      <h1>{text}</h1>
      <div className={classes.accomplishedProjects}>
        <div className={classes.accomplishedProject} data-aos="fade-up">
          <Image src={de} quality={90} title="60+ in Deutschland"/>
          <h3>90</h3>
        </div>
        <div className={classes.accomplishedProject} data-aos="fade-down">
          <Image src={ch} quality={90} title="90+ in der Schweiz"/>
          <h3>60</h3>
        </div>
        <div className={classes.accomplishedProject}>
          <Image src={au} quality={90} title="8 in Osterreich" data-aos="fade-up"/>
          <h3>8</h3>
        </div>
      </div>
    </section>
  );
}