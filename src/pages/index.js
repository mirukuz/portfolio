import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import Experience from "../components/experience";
import Menu from "../components/menu";
import Loader from "../utils/loader";

const Demo = ({ data, location }) => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (loaded === total) {
      setLoading(false);
    }
  }, [loaded, total]);

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
        {loading && <Loader />}
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
  );
};

export default Demo;
