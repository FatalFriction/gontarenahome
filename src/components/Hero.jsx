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
        <div className="hero-video-wrap">
            <video ref={vidRef} src='videos/heros.webm' autoPlay loop muted playsInline className="hero-video" />

            <div className="hero-overlay">
                <h1>Gonta Arena hadir disini</h1>
                <p>Do one thing and do it well</p>
                <button className="hero-cta">Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Hero