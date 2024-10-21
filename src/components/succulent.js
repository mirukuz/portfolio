import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function Succulent() {
  const succulent = useGLTF("/models/succulent.glb");
  return <primitive
    object={succulent.scene}
    scale={0.001}
  />;
}
