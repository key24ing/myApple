import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoC from './VideoC'


const Hilight = () => {

    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 })
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    },[])


  return (
    <section id='hilight' className='w-screen overflow-hidden h-full common-padding bg-zinc '>
        <div className='screen-max-width'>
            <div className='mb-12 w-full items-end justify-between md:flex'>
                  <h1 id='title' className='section-heading'>Get the highlights.</h1>

                  <div className='flex flex-wrap items-end gap-10'>
                      <p className='link'>
                         Watch the films
                         <img src={watchImg} alt="ml-1"className='pt-1 px-2' />
                      </p>    
                      <p className='link'>
                         Watch the events
                         <img src={rightImg} alt="ml-2" className='pt-1 px-3'/>
                      </p>
                  </div>
              </div> 
              
            <VideoC/>
          </div>
    </section>
  )
}

export default Hilight