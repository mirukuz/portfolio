// components/MotionGroup.js
import React, { forwardRef } from 'react';
import { motion } from "framer-motion-3d";
import { useThree } from "@react-three/fiber";

const MotionGroup = forwardRef(({ children, onPointerOverCallback, handleOnClick, onPointerOutCallback, ...props }, ref) => {
  const { gl } = useThree();

  const handlePointerOver = () => {
    gl.domElement.style.cursor = "pointer";
    if (onPointerOverCallback) onPointerOverCallback();
  };

  const handlePointerOut = () => {
    gl.domElement.style.cursor = "grab";
    if (onPointerOutCallback) onPointerOutCallback();
  };

  const bounceVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.group
      ref={ref}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={{ scale: 1.2 }}
      variants={bounceVariants}
      transition={{ duration: 0.8 }}
      onClick={handleOnClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      {...props}
    >
      {children}
    </motion.group>
  );
});

export default MotionGroup;
