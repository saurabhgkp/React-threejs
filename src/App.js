import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics} from "@react-three/cannon";
import BoxOne from './Box/BoxOne'
import PlaneOne from './Box/PlaneOne'
import "./App.css";





export default function App() {
 
  return (
    <Canvas>
     
      <OrbitControls  maxPolarAngle={Math.PI/2.5} enableDampingle={true}  />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <BoxOne />
        <PlaneOne />
      </Physics>
    </Canvas>
  );
}
