import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars,CameraControls ,Sky,Cloud} from "@react-three/drei";
import { Physics} from "@react-three/cannon";
import PlaneOne from './Box/PlaneOne'
import "./App.css";
import Ground from "./Box/Ground";
import { Player } from "./Box/Player";
import Texts from "./Box/Texts";
import Box from "./components/Box";





//position: [100, 10, 0], fov: 75



export default function App() {
 
  return (
    <Canvas >
    	{/* <CameraControls ref={cameraControls} /> */}
      {/* <OrbitControls  maxPolarAngle={Math.PI/1.9} enableDampingle={true} 
       
       autoRotate
       autoRotateSpeed={-0.2}
      /> */}
      {/* <Stars /> */}
  
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <Physics >
       <PlaneOne  />
       <Texts  />
       <Box/>
     
      <Player position={[0, 3, 3]}/>
     {/* <Ground  position={[0, 0, 0]}/> */}
     
      </Physics>
    </Canvas>
  );
}
