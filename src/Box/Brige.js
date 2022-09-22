
import { useGLTF } from "@react-three/drei";

export function Brige(props) {
  const { nodes, materials } = useGLTF("/me.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Component_002.geometry}
          material={materials.Yolanda}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Component_001.geometry}
          material={materials.Safari}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.skp4E5D_001.geometry}
          material={materials.Magnet}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/me.glb");