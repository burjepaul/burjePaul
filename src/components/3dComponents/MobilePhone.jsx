/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 MobilePhone.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

const Phone3D = (props) => {
  const { nodes, materials } = useGLTF('../../MobilePhone.glb')
  return (
    <group {...props} dispose={null} position={props.isMobile ? [0, -1, 1.5] : [0, 0, 2]} rotation={[0, 0, 0]} scale={props.isMobile ? 0.8 : 1}>
      <group position={[-0.137, -0.027, 0]}>
        <group scale={0.025}>
          <mesh geometry={nodes.Rectangle001_1.geometry} material={materials.Material__123} />
          <mesh geometry={nodes.Rectangle001_2.geometry} material={materials.Material__48} />
          <mesh geometry={nodes.Rectangle001_3.geometry} material={materials.Material__60} />
        </group>
      </group>
      <group position={[-0.137, -0.027, 0]}>
        <mesh geometry={nodes.front.geometry} material={materials.Material__141} scale={0.025} />
      </group>
      <group position={[-0.137, -0.027, 0]}>
        <mesh geometry={nodes.back.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[0.147, 1.231, 0.019]} scale={[1.226, 1.226, 1]}>
        <mesh geometry={nodes.Rectangle002.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[0.348, 1.439, -0.053]} scale={[1.401, 1.401, 2.402]}>
        <mesh geometry={nodes.Tube001.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[0.346, 1.441, -0.03]} scale={[1.401, 1.401, 1.59]}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.Material__142} scale={0.025} />
      </group>
      <group position={[0.348, 1.015, -0.053]} scale={[1.401, 1.401, 2.402]}>
        <mesh geometry={nodes.Tube002.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[-0.039, 1.242, -0.053]} scale={[1.401, 1.401, 2.402]}>
        <mesh geometry={nodes.Tube003.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[-0.045, 1.525, -0.026]} scale={[0.354, 0.354, 1]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials.Material__143} scale={0.025} />
      </group>
      <group position={[-0.045, 1.524, -0.04]} scale={[0.354, 0.354, 1.511]}>
        <mesh geometry={nodes.Tube004.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[-0.049, 0.953, -0.026]} scale={[0.354, 0.354, 1]}>
        <mesh geometry={nodes.Cylinder005.geometry} material={materials.Material__142} scale={0.025} />
      </group>
      <group position={[-0.048, 0.953, -0.04]} scale={[0.354, 0.354, 1.511]}>
        <mesh geometry={nodes.Tube005.geometry} material={materials.Material__122} scale={0.025} />
      </group>
      <group position={[-1.039, 0.898, 0.131]} rotation={[0, -Math.PI / 2, 0]} scale={[0.69, 0.869, 1]}>
        <mesh geometry={nodes.Rectangle004.geometry} material={materials.Material__77} scale={0.025} />
      </group>
      <group position={[-1.039, 0.589, 0.131]} rotation={[0, -Math.PI / 2, 0]} scale={[0.69, 0.869, 1]}>
        <mesh geometry={nodes.Rectangle005.geometry} material={materials.Material__77} scale={0.025} />
      </group>
      <group position={[-1.045, 1.241, 0.131]} rotation={[0, -Math.PI / 2, 0]} scale={[0.464, 0.455, 0.524]}>
        <mesh geometry={nodes.Rectangle006.geometry} material={materials.Material__77} scale={0.025} />
      </group>
      <group position={[0.771, 0.786, 0.127]} rotation={[0, -Math.PI / 2, 0]} scale={[0.831, 1.001, 1]}>
        <mesh geometry={nodes.Rectangle008.geometry} material={materials.Material__77} scale={0.025} />
      </group>
      <group position={[0.771, -0.92, 0.127]} rotation={[0, -Math.PI / 2, 0]} scale={[0.831, 1.001, 1]}>
        <mesh geometry={nodes.Rectangle009.geometry} material={materials.Material__77} scale={0.025} />
      </group>
      <group position={[-0.039, 1.246, -0.03]} scale={[1.401, 1.401, 1.59]}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials.Material__142} scale={0.025} />
      </group>
      <group position={[0.347, 1.019, -0.03]} scale={[1.401, 1.401, 1.59]}>
        <mesh geometry={nodes.Cylinder007.geometry} material={materials.Material__142} scale={0.025} />
      </group>
      <group position={[-0.099, -2.831, 0.035]} scale={[1, 1, 0.643]}>
        <mesh geometry={nodes.Text001.geometry} material={materials.Material__145} scale={0.025} />
      </group>
    </group>
  )
}

useGLTF.preload('/MobilePhone.glb')


export default Phone3D