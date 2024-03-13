import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Blockquote } from 'flowbite-react';

const slug = () => {
    const [blog, setblog] = useState();
    const router = useRouter();
    useEffect(()=>{
      if (!router.isReady) return;
      const {slug} = router.query;
      console.log(slug)
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
        return a.json();
      })
        .then((parsed)=>{
          setblog(parsed) 
      })
    },[router.isReady])

  return (
    <Blockquote>
      <h1 className='text-center'>{blog && blog.title}</h1>
      <p className='text-center mt-10'>{blog && blog.content}</p>
    </Blockquote>
  )
}

export default slug
