"use client";
import useSingleArticle from '@/Hooks/useSingleArticle';
import Image from 'next/image';
import React, { useEffect } from 'react'

export default function page({params}) {
    
    const detailArticle = useSingleArticle(params.id);
  
    return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        {/* Начало превью*/}
        <div className="w-full h-[320px] md:h-[520px] overflow-hidden rounded-xl">
        <img src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + detailArticle?.attributes?.image?.data.attributes?.url} alt="" />
        </div>
        {/* Конец превью*/}
        {/* Начало названия*/}
        <h2 className="text-left text-white uppercase text-5xl">{detailArticle?.attributes?.name}</h2>
        {/* Конец названия*/}
        {/* Начало описания*/}
        <p className="text-zinc-700 text-base md:text-xl text-left mt-7">L{detailArticle?.attributes?.longText}</p>
        {/* Конец описания*/}
      </div>
    </section>
  )
}

