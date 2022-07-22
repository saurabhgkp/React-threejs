import { useRef} from 'react'
import {  useFrame} from '@react-three/fiber'
import { useGLTF} from '@react-three/drei'


function Brige({ ...props }) {
  const group = useRef()

  const { nodes, materials } = useGLTF('me.glb')

  useFrame( ({clock})=> { 
             group.current.rotation.x =clock.getElapsedTime()
  })
  return (
    <group ref={group} {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
      <mesh geometry={nodes.Component_002.geometry} material={materials.Yolanda} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Component_001.geometry} material={materials.Safari} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.skp4E5D_001.geometry} material={materials.Magnet} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  </group>
  )
}

export default Brige;