"use client";
import GlobalApi from '@/components/utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const useArticleByCategory = (categoryId) => {

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        getArticlesByCategory();
    }, [categoryId])

  const getArticlesByCategory = () => {
    GlobalApi.getArticlesByCategory(categoryId).then(resp => {
        setArticlesList(resp.data.data);
    });
  }

  return articlesList;
}

export default useArticleByCategory
