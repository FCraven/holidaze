'use client'
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Home() {

  useEffect(()=>{
    console.log('component mounted')
  },[])
  return (
    <main className="">
      <Canvas>
        <mesh onClick={(()=>console.log('clicked!'))}>
          <ambientLight intensity={0.1}/>
          <directionalLight color="red"
                            position={[0,0,5]}/>
          <boxGeometry args={[2,2,2]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </main>
  )
}
