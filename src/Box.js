import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useSpring, animated } from "@react-spring/three";

export default function Box(props) {
  const { nodes, materials } = useGLTF("/box.glb");
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const [springProps, api] = useSpring(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 120, friction: 26 },
  }));

  const handleClick = () => {
    setIsBoxOpen((prevState) => !prevState);
    api.start({ position: isBoxOpen ? [0, -50, -300] : [0, 0, 0], rotation: isBoxOpen ? [-1.5, 0, 0] : [0, 0, 0] });
  };

  const opacity = useControls({
    opacity: { value: 0.5, min: 0, max: 1, step: 0.1 },
  });

  const transparentMaterial = materials.Bottom_transp.clone();
  transparentMaterial.transparent = true;
  transparentMaterial.opacity = opacity.opacity;

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} position={[-1,0,0]}>
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
