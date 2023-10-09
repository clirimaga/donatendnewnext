import Image from "next/image";
import classes from "./AccomplishedProjects.module.css";
import de from "@/public/images/german.png";
import ch from "@/public/images/ch.png";
import au from "@/public/images/au.png";

export default function AccomplishedProjects({ text }) {
  // const cssVariables = {
  //     '--best-color': 'blueviolet',
  //   };
  //   const inlineStyles = {
  //     backgroundColor: 'var(--best-color)',
  //   };
  const percentage = 85;
  return (
    <section className={classes.dachRegion}>
      <h1>{text}</h1>
      <div className={classes.accomplishedProjects}>
        <div className={classes.accomplishedProject}>
          <Image src={de} quality={90} />
          <h3>90</h3>
        </div>
        <div className={classes.accomplishedProject}>
          <Image src={ch} quality={90} />
          <h3>60</h3>
        </div>
        <div className={classes.accomplishedProject}>
          <Image src={au} quality={90} />
          <h3>8</h3>
        </div>
      </div>
    </section>
  );
}