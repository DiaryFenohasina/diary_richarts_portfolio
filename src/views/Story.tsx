import { useRef } from "react"
// import AnimatedTitle from "../components/AnimatedTitle"
import gsap from "gsap"
import RoundedCorners from "../components/RoundedCorners"
import Button from "../components/Button"
import diary from '../assets/diary.jpeg';


const Story = () => {
    //using useRef for animation with gsap
    const frameRef = useRef(null)

    const handleMouseLeave = () => {
        // eslint-disable-next-line no-undef
        gsap.to (element, {
            duration:0.3,
            rotateX: 0,
            rotateY:0,
            ease: 'power1.inOut'
        })
    }

    //get clientX and Y from the event(e)
    const handleMouseMove = (e) => {
        const {clientX , clientY} = e
        const element = frameRef.current

        if(!element) return

        const rect = element.getBoundingClientRect() //get the left,top,width and height
        const x = clientX - rect.left
        const y = clientY - rect.top

        const centerX = rect.width /2
        const centerY = rect.height /2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        gsap.to(element, {
            direction: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <div className='relative size-full'>
                <div className="story-img-container">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img 
                            ref={frameRef}
                            src={diary} 
                            alt="entrance"
                            className="object-contain"
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            />
                        </div>
                    </div>

                    <RoundedCorners />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story