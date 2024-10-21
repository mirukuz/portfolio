import * as React from "react"
import { useGLTF } from '@react-three/drei';

export default function MovieClapper() {
  const movie = useGLTF("/models/basic_movie_clap_board.glb");
  return <primitive
    object={movie.scene}
    scale={0.08}
    rotateX={90}
  />;
}
