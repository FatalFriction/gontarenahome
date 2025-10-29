import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import gsap from 'gsap';

const Showcase = () => {

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    if(!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        }
      });
      timeline.to(".mask img", { 
        opacity: 1,
        scale: 2.1
      }).to('.content', { 
        opacity: 1, 
        y: 0, 
        ease: 'power1.in' 
      });
    }
  }, [isTablet])

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay loop muted playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="mask" />
        </div>
      </div>

      <div className="content">
          <div className="wrapper">
              <div className="lg:max-w-md">
                  <h2>Rocket Chip</h2>

                  <div className="space-y-5 mt-7 pe-10">
                      <p>
                          Gonta Arena {" "}
                          <span className="text-white">
                             the next level of performance
                          </span>
                          . Bermain dengan Presisi
                      </p>
                      <p>
                          Ruang premium di mana presisi bertemu gaya, Meja tournament-grade, pencahayaan LED optimal, dan atmosfer eksklusif yang mengundang fokus total
                      </p>
                      <p>
                          Dilengkapi dengan sound system berkualitas tinggi untuk pengalaman audio yang imersif yang akan menemani sesi latihan dan pertandingan Anda.
                      </p>
                      <p className="text-primary">Cari tahu lebih banyak tentang Gonta Arena</p>
                  </div>
              </div>

              <div className="max-w-3xs space-y-14">
                  <div className="space-y-2">
                      <p>Tersedia</p>
                      <h3>22 Meja</h3>
                      <p>Tournament-grade premium quality</p>
                  </div>
                  <div className="space-y-2">
                      <p>Up to</p>
                      <h3>50+ Event</h3>
                      <p>Acara & Turnamen spesial mingguan</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Showcase