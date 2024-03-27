"use client";
import GlobalApi from '@/components/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleArticle = (id) => {

    const [detailArticle, setDetailArticle]= useState();

    useEffect(()=> {
        getSingleArticle();
    },[id])

  const getSingleArticle = () => {
    GlobalApi.getSingleArticle(id).then(resp => {
        console.log(resp.data.data);
        setDetailArticle(resp.data.data);
    });
  }

  return detailArticle;
}

export default useSingleArticle
