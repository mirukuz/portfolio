import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function Coffee() {
  const coffee = useGLTF("/models/coffee_bean.glb");
  return <primitive
    object={coffee.scene}
    scale={0.1}
    rotateX={90}
    position={[-2, 1.3, 0]}
  />;
}
