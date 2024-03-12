"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import CustomButton from '../CustomButton/CustomButton';


// style for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import { fadeIn } from '../utils/varianstMotion';

const SlideData = [
    {
        title: 'Родословная Клинка',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, exercitationem similique reprehenderit architecto cum quam.',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, exercitationem similique reprehenderit architecto cum quam.',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, exercitationem similique reprehenderit architecto cum quam.',
    },
]

const HeroSlider = () => {
  return (
    <Swiper className='w-full h-full '>
        {SlideData.map((item, index) => {
            return (
                <SwiperSlide key={index} className=''>
                    <div className="w-full md:w-1/2 ">
                        <motion.h2 variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="mb-8  md:text-8xl">{item.title}</motion.h2>
                        <motion.p variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="text-base md:text-xl mb-12">{`${item.description.length > 189 ? item.description.slice(0, 189) + '...' :item.description }`}</motion.p>
                        <motion.div variants={fadeIn('up', 0.1)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className=''>
                            <CustomButton containerStyle='w-[170px] h-[50px]' text='Подробнее' />
                        </motion.div>     
                    </div>
                </SwiperSlide>
            )
        })}
        
    </Swiper>
  )
}

export default HeroSlider
