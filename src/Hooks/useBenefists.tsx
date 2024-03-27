"use client";
import GlobalApi from '@/components/utils/GlobalApi';
import React, { useEffect, useState } from 'react';


const useBenefists = () => {
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

    return benefistsList;
}

export default useBenefists
