import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FloatingRotatingElement = ({ children, position, rotationIntensity, floatIntensity, speed }) => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;
    groupRef.current.position.set(
      position[0] + Math.sin(time * 1.5) * floatIntensity,
      position[1] + Math.cos(time * 1.5) * floatIntensity,
      position[2]
    );
    groupRef.current.rotation.set(0, time * rotationIntensity, 0);
  });

  return <group ref={groupRef}>{children}</group>;
};

export default FloatingRotatingElement;