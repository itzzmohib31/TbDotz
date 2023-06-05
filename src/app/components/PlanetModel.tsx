import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useEffect, useState } from 'react';
import CanvasLoader from "./fallback/CanvasLoader";

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0}></primitive>
  );
};

const PlanetModel = () => {
  const [renderStyle, setRenderStyle] = useState<any>({});
  const DesktopRender = {
    height: '600px',
    width: '30%'
  };
  const MobileRender = {
    height: '400px',
    width: '80%',
    margin: 'auto'
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 761) {
        setRenderStyle(MobileRender);
      } else {
        setRenderStyle(DesktopRender);
      }
    };

    handleResize(); // Initial call to set the render style based on the initial window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      style={renderStyle}
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 100, position: [-4, 3, 6] }}
    >
      <Suspense  fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default PlanetModel;
