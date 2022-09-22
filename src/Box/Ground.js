import { usePlane } from "@react-three/cannon";
function Ground() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
       
       
        <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.4}
        roughness={1}
        metalness={0} />
      </mesh>  
    );
  }
  export default Ground;