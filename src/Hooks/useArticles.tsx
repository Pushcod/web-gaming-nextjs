"use client";

import GlobalApi from '@/components/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useArticles = () => {

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticles();
    },[])

  const getArticles = () => {
    GlobalApi.getArticles().then(resp => {
        console.log(resp.data.data)
        setArticlesList(resp.data.data)
    });
  }

  return articlesList;

}

export default useArticles;