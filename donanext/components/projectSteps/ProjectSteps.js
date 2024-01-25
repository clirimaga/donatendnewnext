"use client";
import { useState } from "react";
import classes from "./ProjectSteps.module.css";
import Step from "./step/Step";
import finish from "@/public/icons/finish.png";
import start from "@/public/icons/start.png";
import Image from "next/image";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ProjectSteps = ({ steps , step}) => {
  const [currentStep, setCurrentStep] = useState(0);
  // const [arrowClickable, setArrowClickable] = useState(true);

  // const leftArrowClickHandler = () => {};

  return (
    <section className={classes.progressStepsWrapper}>
      <h2>Project Realization Steps</h2>
      <div className={classes.progressSteps}>
        {/* <AiOutlineArrowLeft
          className={
            arrowClickable
              ? classes.arrow
              : `${classes.arrow} ${classes.disabled}`
          }
          onClick={leftArrowClickHandler}
        /> */}
        <Image src={start} width={50} height={50} alt="start" />
        {steps.map((step, index) => (
          <Step
            name={step.name}
            key={index}
            text={step.text}
            id={index}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        ))}
        <Image src={finish} width={50} height={50} alt="finish" />
        {/* <AiOutlineArrowRight onClick={rightArrowClickHandler} /> */}
      </div>
        <>
        <h3>{steps[currentStep].name}</h3>
        <p>{steps[currentStep].text}</p>
        </>
    </section>
  );
};

export default ProjectSteps;
