import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import Interface from "./Interface";


export default function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-2, 4.5, 5],
        }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}
