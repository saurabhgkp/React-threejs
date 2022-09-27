import React from "react";
import {  useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import './Texts.css'

const Texts = () => {
  const [ref] = useBox(() => ({   //mass: 1,  
    position: [-8, 2, -44] }));
  return (
    <>
   
    <mesh   ref={ref}>
  
    <Html scale={1} rotation={[Math.PI / 1, 1.5, 3.1]}  transform occlude>
          <div className="annotation">
       <h1>  About Me</h1> 
           {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 </span> */}
          </div>
          <p>
          I am Saurabh Kumar Singh </p><p>
          {/* who is at present looking for job in web development and software development industry. */}
           Strong professional with a Master’s Degree (M.C.A focused in software development from </p><p>
           Institute of Engineering 
           and Technology, Lucknow, Uttar-Pradesh).
          </p>
          <div>
         <h3> Contact Details  </h3> 
         <h3>Saurabh Singh</h3>
         <h3> ssgkp.singh@gmail.com  </h3>
          </div>
</Html> 
     
    
      <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.1}
        roughness={1}
        metalness={0} />
  </mesh> </>
  );
};

export default Texts;