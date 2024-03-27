"use client";
import React, { useEffect } from 'react'

export default function page({params}) {
    
    useEffect(()=>{
        console.log(params.id);
    },[]);
  
    return (
    <div>
      
    </div>
  )
}

