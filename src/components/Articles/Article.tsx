"use client";

import useArticles from '@/Hooks/useArticles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Article = () => {

  const articlesList = useArticles();

  return (
    <section className='w-full py-16'>
        <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className="h2 text-center">Новости клуба</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {articlesList.map((item, index) => {
                        return (
                            <div key={index} className = "w-full border border-zinc-800 rounded-xl p-5" >
                                <div className="w-full h-[270px] overflow-hidden rounded-xl">
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={270} height={270} className='w-full h-full object-cover' />
                                </div>
                                <div className="w-full flex items-center justify-between mt-6">
                                    <Link href={'/articles/category/' + item.attributes?.category?.data.id} className='text-zinc-500 font-medium text-sm'>{item.attributes?.category?.data.attributes?.name}</Link>
                                    <span className='text-zinc-500 font-medium text-sm'>{item.attributes?.updatedAt.slice(0,10)}</span>
                                </div>
                                <Link href={'/articles/' + item.id} className='group'>
                                    <h3 className="text-white text-2xl group-hover:text-orange/50 transition-colors font-semibold">{item.attributes?.name.length > 15 ? item.attributes?.name.slice(0,15) + '...' : item.attributes?.name }</h3>
                                </Link>
                                <p className="mt-4 text-zinc-300">{item.attributes?.smallText.length > 88 ? item.attributes?.smallText.slice(0,88) + '...' : item.attributes?.smallText }</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
</section >
)
}

export default Article
