import React from 'react'
import { Card } from 'flowbite-react';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <Card className="max-w-sm blogItem" imgSrc="/images/blog/image-4.jpg" horizontal>
        <Link href={'/blogpost/learn-react'}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Link>
      </Card>
      <Card className="max-w-sm blogItem" imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <Card className="max-w-sm blogItem" imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </>
  )
}

export default Blog
