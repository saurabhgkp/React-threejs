import { usePlane } from "@react-three/cannon";
import Wave from "./Wave";

function PlaneOne() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 1, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 1, 0, 0]}>
   < Wave  attach="geometry" />
        <meshLambertMaterial attach="material"  color= "black" />
      </mesh>  
    );
  }
  export default PlaneOne;