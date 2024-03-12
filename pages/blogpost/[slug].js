import React from 'react'
import { useRouter } from 'next/router'
import { Blockquote } from 'flowbite-react';

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <Blockquote>
      <h1 className='text-center'>title of the page {slug}</h1>
      <p className='text-center mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime officia ab laboriosam officiis est veritatis dolore nam, molestias aperiam ipsum explicabo quam!</p>
    </Blockquote>
  )
}

export default slug
