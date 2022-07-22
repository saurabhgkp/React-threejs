import React from "react";
import {  useBox } from "@react-three/cannon";
import { Text } from "@react-three/drei";


const Texts = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh rotation={[-Math.PI / 1, 0, 0]}  ref={ref}>
  
      <Text
        scale={[1, 1, 1]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        HELLO WORLD  HELLO WORLD  HELLO WORLD
      </Text>
    
      <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.4}
        roughness={1}
        metalness={0} />
  </mesh>
  );
};

export default Texts;