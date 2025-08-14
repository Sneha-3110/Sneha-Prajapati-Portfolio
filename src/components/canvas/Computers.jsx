import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/gaming_desktop_pc/scene.gltf");

  useEffect(() => {
    // Ensure shadows and lighting behave properly
    computer.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.roughness = 0.6;
          child.material.metalness = 0.2;
        }
      }
    });
  }, [computer]);

  return (
    <mesh>
      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        castShadow
      />
      <pointLight position={[0, 5, 0]} intensity={1} />

      {/* 3D model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add listener for change in screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    //set initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //define a callback func to handle changes in media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add callback func as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
