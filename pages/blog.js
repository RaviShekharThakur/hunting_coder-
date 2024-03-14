import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import Link from 'next/link';

const Blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allBlogs);
  
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {blogs.map((blogItem, index) => (
          <Link href={`/blogpost/${blogItem.slug}`}>
            <Card key={index} href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {blogItem.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                {blogItem.metadesc.substr(0,140)}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()

  return {
    props: { allBlogs}
  }
}

export default Blog
