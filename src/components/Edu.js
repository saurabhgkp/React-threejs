import React from "react";
import {  useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import '../Box/Texts.css'

const Edu = () => {
  const [ref] = useBox(() => ({   //mass: 1,  
    position: [1, 2, 5] }));
  return (
    <>
   
    <mesh   ref={ref}>
  
    <Html scale={1} rotation={[Math.PI / 1, 0, 3.1]}  transform occlude>
          <div className="annotation">
       <h1>  About Me</h1> 
           {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 </span> */}
          </div>
        <h4>  EDUCATION</h4>
        <h3>
Institute of Engineering & Technology, Lucknow Uttar-Pradesh.<br/>
Masters of Computer Application •May 2020<br/><br/>

Dr. Rammanohar Lohia Avadh University”, Ayodhya Uttar-Pradesh.<br/>
Bachelors of Science •May 2017</h3>
                 
</Html> 
     
    
      <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.1}
        roughness={1}
        metalness={0} />
  </mesh> </>
  );
};

export default Edu;