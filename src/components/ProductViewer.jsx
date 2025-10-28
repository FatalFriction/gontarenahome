import React from 'react'
import useStore from '../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import Studios_light from './Models/Studios_light';
import ModelSwitcher from './three/ModelSwitcher';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {

    const {color, scale, setColor, setScale} = useStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    
  return (
    <section id='product-viewer'>
        <div>
            <div className='controls'>
                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div  onClick={() => setColor('#adb5bd')} className={clsx('bg-neutral-300', color == '#adb5bd' && 'active')} />
                        <div onClick={() => setColor('#2e2c2e')} className={clsx('bg-neutral-900', color == '#2e2c2e' && 'active')} />
                    </div>

                    <div className='size-control'>
                        <div onClick={() => setScale(0.97)} className={clsx(scale == 0.97 ? 'bg-white text-black' : 'bg-transparent text-white')}><p>A</p></div>
                        <div onClick={() => setScale(1.17)} className={clsx(scale == 1.17 ? 'bg-white text-black' : 'bg-transparent text-white')}><p>B</p></div>
                    </div>
                </div>
            </div>
        </div>

        <p className='text-white text-4xl'>Take a closer look to Our Collections</p>

        <div style={{
            width: '100%',
            height: 800,
            }}>
            <Canvas
                gl={{ alpha: true, antialias: true }} 
                style={{ background: 'transparent' }}
                camera={{position: [0,-10,0], fov: 60, near: 0.1, far: 100}}
            >
                <Studios_light />
                <ModelSwitcher isMobile={isMobile} scale={ isMobile ? scale - 0.03 : scale }/>
            </Canvas>
        </div>
    </section>
  )
}

export default ProductViewer