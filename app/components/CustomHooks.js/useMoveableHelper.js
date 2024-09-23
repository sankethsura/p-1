import React, { useEffect, useState } from "react";

export default function useMoveableHelper() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 2000);
    setTimeout(() => {
      setStep(0);
    }, 2500);
  }, []);
  let stepCss = "duration-500 ease-in-out";
  if (step === 1) {
    stepCss = "translate-y-[150px]";
  } else if (step === 0) {
    stepCss = "";
  }

  return { stepCss };
}
