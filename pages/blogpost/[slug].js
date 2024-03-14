import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Blockquote } from 'flowbite-react';

const Slug = (props) => {
  function createMarkup(content) {
    return {__html: content};
  }
  
  const [blog, setblog] = useState(props.myBlog);
  return (
    <Blockquote>
      <h1 className='text-center'>{blog && blog.title}</h1>
      <p className='text-center mt-10'>{blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}</p>
      
    </Blockquote>
  )
}



export async function getServerSideProps(context) {
  
  // const router = useRouter();
    // console.log(context.query)
    const {slug} = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    
  return {
    props: { myBlog}
  }
}

export default Slug
