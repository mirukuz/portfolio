// components/Bubble.js
import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { navigate } from "gatsby";
import * as THREE from "three";
import MotionGroup from "../utils/motionGroup";

export default function Bubble() {
  const bubble = useGLTF("/models/bubble.glb");
  const animations = useAnimations(bubble.animations, bubble.scene);

  const bubbleAction = useRef(null);
  const dot1Action = useRef(null);
  const dot2Action = useRef(null);
  const dot3Action = useRef(null);

  useEffect(() => {
    if (!animations.actions) return;

    const bubbleActionRef = animations.actions.bubbleAction;
    const dot1ActionRef = animations.actions.dot1Action;
    const dot2ActionRef = animations.actions.dot2Action;
    const dot3ActionRef = animations.actions.dot3Action;

    bubbleAction.current = bubbleActionRef;
    dot1Action.current = dot1ActionRef;
    dot2Action.current = dot2ActionRef;
    dot3Action.current = dot3ActionRef;

    bubbleActionRef.setLoop(THREE.LoopOnce);
    bubbleActionRef.clampWhenFinished = true;
    dot1ActionRef.setLoop(THREE.LoopOnce);
    dot1ActionRef.clampWhenFinished = true;
    dot2ActionRef.setLoop(THREE.LoopOnce);
    dot2ActionRef.clampWhenFinished = true;
    dot3ActionRef.setLoop(THREE.LoopOnce);
    dot3ActionRef.clampWhenFinished = true;

    const playBubbleAnimation = () => {
      if (!bubbleAction.current) return;
      bubbleAction.current.reset().play();
    };

    const playDotsAnimation = () => {
      if (!dot1Action.current || !dot2Action.current || !dot3Action.current) return;

      dot1Action.current.reset().play();
      dot2Action.current.reset().play();
      dot3Action.current.reset().play();
    };

    playBubbleAnimation();
    playDotsAnimation();
  }, [animations.actions]);

  const handleOnClick = () => {
    navigate("/professional-history");
  };

  return (
    <MotionGroup
    handleOnClick={handleOnClick}
      whileHover={{ scale: 1.1 }}
      position={[1, 0.7, 0]}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <primitive scale={0.2} object={bubble.scene} />
    </MotionGroup>
  );
}
