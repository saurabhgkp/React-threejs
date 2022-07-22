import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics} from "@react-three/cannon";
import PlaneOne from './Box/PlaneOne'
import "./App.css";
import Ground from "./Box/Ground";
import { Player } from "./Box/Player";
import Texts from "./Box/Texts";





//position: [100, 10, 0], fov: 75



export default function App() {
 
  return (
    <Canvas >
    
      <OrbitControls  maxPolarAngle={Math.PI/1.9} enableDampingle={true} 
       
       autoRotate
       autoRotateSpeed={-0.2}
      />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <Physics >
       <PlaneOne  />
       <Texts  />
      <Player position={[0, 3, 3]}/>
     <Ground  position={[0, 0, 0]}/>
     
      </Physics>
    </Canvas>
  );
}
