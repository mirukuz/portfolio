import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { extend, useThree } from '@react-three/fiber';

// Extend the necessary geometry and material
extend({ PlaneGeometry: THREE.PlaneGeometry, ShaderMaterial: THREE.ShaderMaterial });

function GradientBackground() {
  const meshRef = useRef();
  const { size, viewport, camera } = useThree();

  useEffect(() => {
    if (meshRef.current) {
      const material = meshRef.current.material;
      material.uniforms.resolution.value.set(size.width, size.height);
    }
  }, [size]);

  return (
    <mesh ref={meshRef} scale={[viewport.width * 2, viewport.height * 2, 1]} position={[0, 0, -5]}>
      <planeGeometry args={[5, 5]} />
      <shaderMaterial
        uniforms={{
          resolution: { value: new THREE.Vector2() },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec2 resolution;
          varying vec2 vUv;

          vec3 colorFromHex(int hexValue) {
            float r = float((hexValue >> 16) & 0xFF) / 255.0;
            float g = float((hexValue >> 8) & 0xFF) / 255.0;
            float b = float(hexValue & 0xFF) / 255.0;
            return vec3(r, g, b);
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / resolution;
            float diagCoord = (uv.x + uv.y) / 2.0;
            
            // Define colors from the palette
            vec3 color1 = colorFromHex(0x355070);
            vec3 color2 = colorFromHex(0x6d597a);
            vec3 color3 = colorFromHex(0xb56576);
            vec3 color4 = colorFromHex(0xe56b6f);
            vec3 color5 = colorFromHex(0xeaac8b);

            // Create a diagonal gradient effect using multiple color stops
            vec3 color;
            if (diagCoord < 0.25) {
              color = mix(color1, color2, diagCoord / 0.25);
            } else if (diagCoord < 0.5) {
              color = mix(color2, color3, (diagCoord - 0.25) / 0.25);
            } else if (diagCoord < 0.75) {
              color = mix(color3, color4, (diagCoord - 0.5) / 0.25);
            } else {
              color = mix(color4, color5, (diagCoord - 0.75) / 0.25);
            }

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default GradientBackground;
