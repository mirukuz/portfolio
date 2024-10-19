import * as React from "react"
import { useAnimations, useGLTF } from '@react-three/drei';
// import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import * as THREE from 'three'; 

export default function Molly() {
  const zz = useGLTF("/models/molly3.glb");
  const animations = useAnimations(zz.animations, zz.scene);

//   const { animationName } = useControls({
//     animationName: { options: animations.names }
//   });

  const eyeActionRef = useRef(null);

  useEffect(() => {
    if (!animations.actions || !animations.actions.eyeAction) return;
    const eyeAction = animations.actions.eyeAction;

    // Store the reference to AnimationAction
    eyeActionRef.current = eyeAction;
    
    const playBlinkAnimation = () => {
      if (!eyeActionRef.current) return;

      const eye = eyeActionRef.current;
      
      eye
        .reset()
        .setLoop(THREE.LoopOnce, 1)
        .play();
        
      eye.clampWhenFinished = true;
    };

    // Play the blink animation initially
    playBlinkAnimation();

    // Play the blink animation every 20 seconds
    const interval = setInterval(playBlinkAnimation, 2000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [animations.actions]);
  
  return <primitive
    object={zz.scene}
    scale={0.8}
  />;
}
