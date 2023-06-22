import { useState } from "react";

const messages = [
  "Go to hill ⛰️",
  "Open your Wings 🪽",
  "Fly High 🪰",
];

export default function App(){
  function handlePrevious(){
   if(step > 1) setStep((currentStep) => currentStep - 1);
  }

  function handleNext(){
    if (step<3) setStep((currentStep) => currentStep + 1);
  }

 const [step, setStep] = useState(1)
 const [isOpen, setIsOpen] = useState(true)
  return (
    <>
    <button className="close" onClick={()=> setIsOpen(prev => !prev)}>&times;</button>
    {isOpen && (
    <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step} : {messages[step - 1]}
        </p>

        <div className="buttons">
          <button
            onClick={handlePrevious}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
      )}
    </>
  );

}
