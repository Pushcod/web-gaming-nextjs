"use client";

import GlobalApi from '@/components/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSub = () => {
  
    const [subList, setSubList] = useState([]);

    useEffect(() => {
        getSub();
    },[])

  const getSub = () => {
    GlobalApi.getSub().then(resp => {
        console.log(resp.data.data)
        setSubList(resp.data.data)
    })
  }
  
  
    return subList;
}

export default useSub