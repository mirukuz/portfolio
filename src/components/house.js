import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function House() {
  const house = useGLTF("/models/low_poly_simple_house.glb");
  return <primitive
    object={house.scene}
    scale={0.08}
  />;
}
