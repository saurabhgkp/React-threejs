import React from "react";
import {  useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import '../Box/Texts.css'

const Project = () => {
  const [ref] = useBox(() => ({   //mass: 1,  
    position: [0, 2, -20] }));
  return (
    <>
   
    <mesh   ref={ref}>
  
    <Html scale={1} rotation={[Math.PI / 1, 0, 3.1]}  transform occlude>
        
          <h2> Projects </h2>
    <h3> Memories(mern) </h3>

    <p> Development using technologies like React with Javascript, Material UI, CSS3
        Managed application state with Redux </p>
    <p> For back end Node.js, Express is used for the server & MongoDB, Mongoose create schema and data modeling</p>

    <h3> Memories(mern) </h3>

    <p> Front end and Back end
        User interface components in React-Js with Javascript and ES6 features
        Managed application </p>
    <p> state with Redux-Thunk
        Commerce.js provides inbuilt functionality for supporting customer logins without any server-side code. </p>

    <h3> E-commerce</h3>

    <p> Front end
        UI development using technologies Using React.js, redux, and Firebases.
        LinkedIn Clone
        Front end </p>
                 
</Html> 
     
    
      <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.1}
        roughness={1}
        metalness={0} />
  </mesh> </>
  );
};

export default Project;