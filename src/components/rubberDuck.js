import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function RubberDuck() {
  const duck = useGLTF("/models/rubberduck.glb");
  return <primitive
    object={duck.scene}
    scale={0.4}
  />;
}
