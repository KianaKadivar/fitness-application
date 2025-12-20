import React from 'react'
import { SelectedPage } from '../../Shared/types'
import useMediaQuery from '../../Hooks/useMediaQuery'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import EvolveText from "@/assets/EvolveText.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ActionButton from '../../Shared/ActionButton'
import {motion} from "framer-motion"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10  md:h-full md:pb-0'>
        {/* Image & Main header */}
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
            className='md:flex mx-auto mb-20 w-5/6 items-center justify-center md:h-5/6'  >
            {/* Main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Headings */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }}
                    className='md:-mt-20'>
                        <div className='relative'>
                            <img
                              src={EvolveText}
                              alt="Evolve text"
                              className="absolute -top-10 -left-10 -z-10 w-[720px] h-auto"
                            />
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-Evolve ">
                                <img alt='home-page-text' src={HomePageText}/>
                            </div>
                        </div>
                        <p className='mt-8 text-sm'>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                {/* Actions */}
                    <motion.div                     
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }} 
                    className='mt-8 flex items-center gap-8 md:justify-start'>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink className='font-bold text-sm underline text-primary-500 hover:text-secondary-500'
                        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
            </div>
            {/* Image */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img alt='home-page-graphic' src={HomePageGraphic}/>
            </div>
        </motion.div>
        {/* Sponsors */}
        {isAboveMediumScreens&&(
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='w-3/5 flex items-center justify-between gap-8'>
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home