import classes from "./CardSection.module.css";
import tdl from "../../public/images/to-do-list.png";
import chat from "../../public/images/chat.png";
import medal from "../../public/images/medal.png";
import Image from "next/image";
export default function CardSection({
  title,
  response,
  weeks,
  realization,
  warranty,
  paragraph
}) {
  return (
    <section className={classes.cardSection}>
      <div className={classes.card}>
        <Image src={chat} alt="support" />
        <h3>{title}</h3>
        <p>{response}</p>
      </div>
      <div className={classes.card}>
        <Image src={tdl} alt="project time" />
        <h3>
          6-8
          {weeks}
        </h3>
        <p>{realization}</p>
      </div>
      <div className={classes.card}>
        <Image src={medal} alt="warranty" />
        <h3>{warranty}</h3>
        <p>{paragraph}</p>
      </div>
    </section>
  );
}
