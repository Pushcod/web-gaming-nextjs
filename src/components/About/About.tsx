"use client";
import React, { useEffect, useState } from 'react';
import GlobalApi from '../utils/GlobalApi';

const About = () => {

  const [benefistsList, setBenefistsList] = useState([]);

  useEffect(() => {
    getBenefists();
  },[]);

  const getBenefists = () => {
      GlobalApi.getBenefists().then( resp => {
        console.log(resp.data.data);
        setBenefistsList(resp.data.data);
      });
  }

  return (
    <section className='w-full py-16' >
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="h2 text-center">О нашем клубе</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                <div className="w-full h-full border border-zinc-800 p-5 rounded-xl flex flex-col items-center justify-center gap-4">
                    <div className="w-[110px] h-[110px] flex items-center justify-center border border-white/70 text-accent/80 rounded-full text-4xl font-semibold">200</div>
                    <h3 className="text-center text-3xl">Игровых зон</h3>
                </div>
               
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
