
import React, { useEffect } from 'react'

export default function useAnimationSteps({
    isSelected,
    duration = 1000,
}) {

    const [animationStep, setAnimationStep] = React.useState(0);

    useEffect(() => {
      if (!isSelected) {
        setAnimationStep(0);
        return;
      }
  
      // Start animation after component mounts
      const timer = setTimeout(() => {
        setAnimationStep(1);
      }, duration); // Delay of 1 second
  
      // Clear timeout if component unmounts before animation is complete
      return () => clearTimeout(timer);
    }, [isSelected]); // Re-run the effect whenever isSelected changes
    
  return { animationStep }
}
