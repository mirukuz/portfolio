import * as React from "react"
import { Link, graphql } from "gatsby"
import { Canvas } from "@react-three/fiber"

import Experience from "../components/experience"
import Menu from "../components/menu"

const Demo = ({ data, location }) => {
  return (
    <>
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
    <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to top right, #355070, #6d597a, #b56576, #e56b6f, #eaac8b)",
          zIndex: -1, // Place behind the canvas
        }}
        ></div>
      <Canvas
        style={{
          height: "100vh",
        }}
        className="r3f"
        gl={{ alpha: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Experience />
      </Canvas>
      </div>
      <Menu />
    </>
  )
}

export default Demo
