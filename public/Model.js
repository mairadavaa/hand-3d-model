import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/hand2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-0.22, 0.18, -0.02]}
        scale={[1.34, 1.8, 0.45]}
      />
    </group>
  );
}

useGLTF.preload("/hand2.glb");