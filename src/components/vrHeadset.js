import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function VRHeadset() {
  const vr = useGLTF("/models/vr_headset.glb");
  return <primitive
    object={vr.scene}
    scale={0.2}
  />;
}
