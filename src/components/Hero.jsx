import React, { useRef,useEffect } from 'react'

const Hero = () => {

    const vidRef = useRef();

    useEffect(() => {
        if(vidRef.current) {
            vidRef.current.playbackRate = 2;
        }
    }, []);

  return (
    <section id='hero'>
        <div>
            <h1>Welcome to Our Website</h1>
            <img src='/title.png' alt='Title'/>
            <video ref={vidRef} src='videos/hero.mp4' autoPlay loop muted playsInline/>
            <button>Get Started</button>
            <p>Your success starts here. Discover our services and solutions designed to help you achieve your goals.</p>
        </div>
    </section>
  )
}

export default Hero