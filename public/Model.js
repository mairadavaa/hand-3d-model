import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { scene } = useGLTF('./hand1.glb', true);
  const { nodes, materials } = useGLTF("/hand1.glb");
  return (
    <group {...props} dispose={null} object={scene}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={[1.8, 2.45, 0.79]}
      />
    </group>
  );
}

useGLTF.preload("/hand1.glb");