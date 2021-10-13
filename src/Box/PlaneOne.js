import { usePlane } from "@react-three/cannon";

function PlaneOne() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        <meshLambertMaterial attach="material" color="lightblue" />
      </mesh>
    );
  }
  export default PlaneOne;