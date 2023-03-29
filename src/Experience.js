import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import Box from "./Box.js";

export default function Experience({handleClick, springProps}) {
  return (
    <>
      <color args={["#695b5b"]} attach="background" />

      <Environment preset="park" />

      <Suspense>
        <Box handleClick={handleClick} springProps={springProps}/>
      </Suspense>
    </>
  );
}
