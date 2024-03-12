import React from 'react'
import Link from "next/link";
import { Button, Navbar } from 'flowbite-react';

const CustomNavbar = () => {
  return (
    <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Link href="/" passHref>
                <Navbar.Link >Home</Navbar.Link>
                </Link>
                <Link href="/about" passHref>
                <Navbar.Link>About</Navbar.Link>
                </Link>
                <Link href="/blog" passHref>
                <Navbar.Link>Blog</Navbar.Link>
                </Link>
                <Link href="/contact" passHref>
                <Navbar.Link>Contact</Navbar.Link>
            </Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
