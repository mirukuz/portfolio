import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { navigate } from "gatsby";
import MotionGroup from "../utils/motionGroup"; // Correct path

const FloatingRotatingElement = ({ url, children, position = [0, 0, 0], rotationIntensity = 1, floatIntensity = 1, speed = 1, onPointerOverCallback, onPointerOutCallback }) => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime() * speed;
      groupRef.current.position.set(
        position[0] + Math.sin(time * 1.5) * floatIntensity,
        position[1] + Math.cos(time * 1.5) * floatIntensity,
        position[2]
      );
      groupRef.current.rotation.set(0, time * rotationIntensity, 0);
    }
  });

  return (
    <MotionGroup handleOnClick={() => navigate(url)} ref={groupRef} onPointerOverCallback={onPointerOverCallback} onPointerOutCallback={onPointerOutCallback}>
      {children}
    </MotionGroup>
  );
};

export default FloatingRotatingElement;