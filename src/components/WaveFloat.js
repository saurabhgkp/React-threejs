import { usePlane } from "@react-three/cannon";
import React from 'react';



import Wave from "./Wave";

function WaveFloat() {





    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 1, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 1, 0, 0]}>
        	<planeBufferGeometry attach="geometry"  />
    < Wave  attach="geometry" /> 
        <meshLambertMaterial attach="material" 
       //  map={texture} 
        color= "#ffffff00" 
         transparent 
        opacity={0.1}
        roughness={1}
        metalness={0} 
        
        />
      </mesh>  
    );
  }
  export default WaveFloat;




