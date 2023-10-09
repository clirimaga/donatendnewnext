import classes from "./Step.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Step(props) {
  return (
    <div
      className={`${classes.step} ${
        props.id === props.currentStep ? classes.active : ""
      }`}
      onClick={() => props.setCurrentStep(props.id)}
    >
      <div className={classes.stepDisplay}>
        <small>Step {props.id + 1}</small>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}
