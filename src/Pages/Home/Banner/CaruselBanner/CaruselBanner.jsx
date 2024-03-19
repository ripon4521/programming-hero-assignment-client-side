import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import bannerImg from '../../../../assets/Banner/McSP_websitebannerRemmit_1325x360_tonga.png'
import bannerImg2 from '../../../../assets/Banner/McSP_websitebanner_1325x360_tonga.png'
import bannerImg3 from '../../../../assets/Banner/Banner.jpg'

const CaruselBanner = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    return (
        <div>
             <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><img className="w-full" src={bannerImg} alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img className="w-full"  src={bannerImg2} alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img src={bannerImg3} alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img className="w-full"  src={bannerImg2} alt="" /></div>
      
        <div className="keen-slider__slide number-slide5"><img src={bannerImg3} alt="" /></div>
        <div className="keen-slider__slide number-slide1"><img className="w-full" src={bannerImg} alt="" /></div>
        <div className="keen-slider__slide number-slide6"><img src={bannerImg3} alt="" /></div>
       
      </div>
        </div>
    );
};

export default CaruselBanner;