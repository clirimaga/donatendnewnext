"use client";
import { useState } from "react";
import classes from "./ProjectSteps.module.css";
import Step from "./step/Step";
import finish from '@/public/icons/finish.png'
import start from '@/public/icons/start.png'
import Image from "next/image";

const ProjectSteps = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className={classes.progressStepsWrapper}>
      <h2>Project Realization Steps</h2>
      <div className={classes.progressSteps}>
        <Image src={start} width={50} height={50} alt="start"/>
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
          <Image src={finish} width={50} height={50} alt="finish"/>
        <p>{steps[currentStep].text}</p>
      </div>
    </section>
  );
};

export default ProjectSteps;
