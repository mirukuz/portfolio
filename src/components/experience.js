import * as React from "react";
import {
  PresentationControls,
  Float,
  Environment,
  Text3D,
  Center,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Molly from "./molly";
import Bubble from "./bubble";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 2, camera.position.z),
      0.05
    );
    camera.lookAt(0, 0, 0);
  });
}

export default function Experience() {
  const [bubbleVisible, setBubbleVisible] = React.useState(false);
  const { gl } = useThree();
  React.useEffect(() => {
    let showTimeout, hideTimeout;

    const showBubble = () => {
      setBubbleVisible(true);
      hideTimeout = setTimeout(hideBubble, 3000); // Minimum 3 seconds display time
    };

    const hideBubble = () => {
      setBubbleVisible(false);
      showTimeout = setTimeout(showBubble, Math.random() * 5000 + 7000); // Random time between 7 to 12 seconds + the 3 seconds it was visible
    };

    showTimeout = setTimeout(showBubble, Math.random() * 5000 + 2000); // Initial delay

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      gl.domElement.style.cursor = "grab";
    };
  }, [gl.domElement.style.cursor]); // Empty dependency array to ensure it's only set up once

  const handlePointerOver = () => {
    gl.domElement.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    gl.domElement.style.cursor = "grab";
  };

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.7} />
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <Molly />
          {bubbleVisible && 
            <Bubble onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} />
          }
        </Float>
      </PresentationControls>
      <Center scale="0.1" position={[0, -0.8, 0]}>
        <Text3D
          letterSpacing={0.5}
          font="/fonts/helvetiker_regular.typeface.json"
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          MOLLY
        </Text3D>
      </Center>
      <Rig />
    </>
  );
}
