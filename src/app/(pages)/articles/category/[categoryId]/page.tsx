'use client';

import useArticleByCategory from '@/Hooks/useArticleByCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function page({params}) {

    const getArticles = useArticleByCategory(params.categoryId);

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col  gap-10 " >
            <div className="">
                
                    <h2 className="h2 text-center block">Категория: {getArticles.attributes?.category?.data.attributes?.name}</h2>
                
            </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {getArticles.length > 0 ? getArticles.map((item, index) => {
                        return(
                            <>
                            <div key={index} className = "w-full rounded-xl relative" >
                        
                                <div className="w-full h-[350px] overflow-hidden rounded-t-lg relative">
                                    <div className="w-full flex items-start justify-between mb-3 rounded-t-lg absolute top-3 left-1">
                                            <Link href={'/articles/category/' + item.attributes?.category?.data.id} className='text-zinc-300 font-medium text-sm hover:text-orange-500 transition-colors bg-red-500 rounded-xl p-2'>{item.attributes?.category?.data.attributes?.name}</Link>
                                            
                                        </div>
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + item.attributes?.image?.data.attributes?.url} alt={'Картинка записи'} width={270} height={270} className='w-full h-full object-cover object-top' />
                                    
                                </div>
                                <div className="w-full flex flex-col items-center justify-center m-0 p-0   bg-zinc-700/90 p-2 rounded-b-lg hover:bg-zinc-900/90">
                                    <Link href={'/articles/' + item.id} className='group w-full h-full flex item-center justify-center p-[25px]'>
                                       <h3 className=" text-gray-200 text-2xl group-hover:text-orange-500 transition-colors font-semibold">{item.attributes?.name.length > 15 ? item.attributes?.name.slice(0,15) + '...' : item.attributes?.name }</h3>
                                    </Link>
                                </div>
                            </div>
                            </>
                            
                        )
                    })
                    :
                    [1,2,3,4].map((item, index) => {
                      return (
                        <div key={index} className="w-full h-[350px] rounded-xl bg-zinc-800 animate-pulse"></div>
                      );
                    })}
                </div>
            </div>
      </div>
    </section>
  )
}