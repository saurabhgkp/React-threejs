import React from "react";
import {  useBox } from "@react-three/cannon";
import { Text,Html } from "@react-three/drei";
import './Texts.css'

const Texts = () => {
  const [ref] = useBox(() => ({   //mass: 1,  
    position: [2, 1, -4] }));
  return (
    <>
   
    <mesh rotation={[-Math.PI / 1, 0, 0]}  ref={ref}>
  
    <Html>
<body>

<h2>Card</h2>

<div class="card">
  
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>

</body>
</Html> 
     
    
      {/* <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.4}
        roughness={1}
        metalness={0} /> */}
  </mesh> </>
  );
};

export default Texts;