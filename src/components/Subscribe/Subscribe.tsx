"use client";

import useSub from '@/Hooks/useSub'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Subscribe = () => {

    const subList = useSub();

  return (
    <section>
      <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className="h2 text-center">Пакеты клуба</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {subList.map((item, index) => {
                        return (
                            <div key={index} className = "w-full border border-zinc-800 rounded-xl p-5" >
                                <div className="w-full h-[150px] overflow-hidden rounded-xl">
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + item.attributes?.icon?.data.attributes?.url} alt={'Картинка записи'} width={200} height={150} className='w-full h-full object-cover' />
                                    
                                </div>
                              
                                <Link href={'/subscribe/' + item.id} className='group flex space-x-1 '>
                                    <h3 className="text-white text-2xl group-hover:text-orange/500 transition-colors font-semibold">{item.attributes?.Name.length > 15 ? item.attributes?.Name.slice(0,15) + '...' : item.attributes?.Name } Подписка</h3>
                                    <p className="text-white text-2xl  text-orange/500 transition-colors font-semibold">{item.attributes?.cost } ₽</p>
                                </Link>
                                <p className="mt-4 text-zinc-400">{item.attributes?.PC.length > 88 ? item.attributes?.PC.slice(0,88) + '...' : item.attributes?.PC }</p>
                                <p className="mt-4 text-zinc-300">{item.attributes?.stats.length > 88 ? item.attributes?.stats.slice(0,88) + '...' : item.attributes?.stats }</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe
