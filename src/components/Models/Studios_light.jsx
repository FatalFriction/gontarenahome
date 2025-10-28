import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const Studios_light = () => {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form="rect"
                    intensity={10}
                    position={[-9,6,-4]}
                    scale={10}
                    rotation-y={Math.PI/2}
                />
                <Lightformer 
                    form="rect"
                    intensity={7}
                    position={[8,0,1]}
                    scale={10}
                    rotation-y={Math.PI/2}
                />
                <Lightformer 
                    form="rect"
                    intensity={8}
                    position={[8,-17,0]}
                    scale={9}
                    rotation-y={Math.PI/3}
                />
            </group>
        </Environment>
        <spotLight 
            position={[-5, 12, 5]} 
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.3}
        />
        <spotLight 
            position={[0, 20, 8]} 
            angle={0.15}
            decay={0.1}
            intensity={Math.PI * 0.6}
        />
    </group>
  )
}

export default Studios_light