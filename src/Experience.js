import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Box from "./Box.js";

export default function Experience() {
  return (
    <>
      <color args={["#695b5b"]} attach="background" />

      {/* <OrbitControls makeDefault /> */}

      <Environment preset="park" />

      <Suspense>
        <Box scale={0.35} />
      </Suspense>
    </>
  );
}
