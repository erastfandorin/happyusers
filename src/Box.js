import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { animated } from "@react-spring/three";

export default function Box({handleClick, springProps}) {
  const { nodes, materials } = useGLTF("/box.glb");

  const opacity = useControls({
    opacity: { value: 0.5, min: 0, max: 1, step: 0.1 },
  });

  const transparentMaterial = materials.Bottom_transp.clone();
  transparentMaterial.transparent = true;
  transparentMaterial.opacity = opacity.opacity;

  // fix chrome warning 
  // Event.path is deprecated and will be removed. Please use Event.composedPath() instead.
  useEffect(() => {
    handleClick();
  }, [])

  return (
    <group dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.005} position={[0,-1,-0.3]} >
        <mesh geometry={nodes.BOX_Bottom0.geometry} material={materials.Box_main} />
        <mesh geometry={nodes.BOX_Detail0.geometry} material={materials.Detail} />
        <mesh geometry={nodes.BOX_Handle_0.geometry} material={materials.Bottom_transp} />
        <animated.mesh
          position={springProps.position}
          rotation={springProps.rotation}
          geometry={nodes.BOX_Top0.geometry}
          material={transparentMaterial}
          onClick={() => handleClick()}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/BOX.glb");
