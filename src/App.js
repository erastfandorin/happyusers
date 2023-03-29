import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import Experience from "./Experience.js";
import Interface from "./Interface";


export default function App() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  // move animation
  const [springProps, api] = useSpring(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 120, friction: 26 },
  }));
  const handleClick = () => {
    setIsBoxOpen((prevState) => !prevState);
    api.start({ position: isBoxOpen ? [0, -50, -300] : [0, 0, 0], rotation: isBoxOpen ? [-1.5, 0, 0] : [0, 0, 0] });
  };

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 7, 2],
        }}
      >
        <Experience handleClick={handleClick} springProps={springProps}/>
      </Canvas>
      <Interface handleClick={handleClick}/>
    </>
  );
}
