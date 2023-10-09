"use client";
import { useState } from "react";
import classes from "./ProjectSteps.module.css";
import Step from "./step/Step";

const ProjectSteps = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className={classes.progressStepsWrapper}>
      <h2>Project Realization Steps</h2>
      <div className={classes.progressSteps}>
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
        <p>{steps[currentStep].text}</p>
      </div>
    </section>
  );
};

export default ProjectSteps;
