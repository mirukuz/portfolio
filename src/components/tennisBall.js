import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function Tennisball() {
  const ball = useGLTF("/models/tennis_ball.glb");
  return <primitive
    object={ball.scene}
    scale={0.1}
  />;
}
