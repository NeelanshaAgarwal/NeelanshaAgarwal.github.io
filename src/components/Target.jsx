import { useGLTF } from '@react-three/drei';
import React,{ useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  useGSAP (() => {
    gsap.to(targetRef.current.position,{
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  },
  [targetRef]
);
  

  return (
    <mesh {...props} 
    ref = {targetRef}
    position={[-25,-10,0]}
    scale={1.1}
    rotation={[0,Math.PI/5,0]}>
    <primitive object={scene} />
    </mesh>
  )
}

export default Target
