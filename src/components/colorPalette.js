import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function ColorPalette() {
  const palette = useGLTF("/models/color_palette.glb");
  return <primitive
    object={palette.scene}
    scale={0.1}
  />;
}
