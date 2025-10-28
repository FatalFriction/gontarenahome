import { PresentationControls } from '@react-three/drei';
import {React, useRef} from 'react'
import CueDetach from '../Models/Cue_sticks_detachable';
import Cue from '../Models/Cue_stick';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 30;

const fadeMeshes = (group, opacity, instant = false) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            if (instant) {
                child.material.opacity = opacity;
            } else {
                gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
            }
        }
    })
}

const moveGroup = (group, x, instant = false) => {
    if(!group) return;

    if (instant) {
        group.position.x = x;
    } else {
        gsap.to(group.position, { 
            x, 
            duration: ANIMATION_DURATION,
            ease: "power2.inOut"
        })
    }
}

const ModelSwitcher = ({scale, isMobile,}) => {
    const attachedModel = useRef();
    const detachModel = useRef();

    const showDetachedModel = scale < 1;

    useGSAP(() => {
        if(showDetachedModel) {
        moveGroup(attachedModel.current, OFFSET_DISTANCE);
        moveGroup(detachModel.current, 0);

        fadeMeshes(attachedModel.current, 0);
        fadeMeshes(detachModel.current, 1);
        }
        else {
        moveGroup(attachedModel.current, 0);
        moveGroup(detachModel.current, -OFFSET_DISTANCE);
        
        fadeMeshes(attachedModel.current, 1);
        fadeMeshes(detachModel.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass:1, tension: 0, friction: 26}
    }

  return (
    <>  
    
        <PresentationControls {...controlsConfig}>
            <group ref={detachModel}>
                <CueDetach scale={isMobile ? 0.05 : 2} />
            </group>
        </PresentationControls>

        <PresentationControls {...controlsConfig}>
            <group ref={attachedModel}>
                <Cue scale={isMobile ? 0.05 : 2} />
            </group>
        </PresentationControls>
        
    </>
  )
}

export default ModelSwitcher