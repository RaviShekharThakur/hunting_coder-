import React from 'react'
import Link from "next/link";
import Image from "next/image";

import { Button, Navbar } from 'flowbite-react';

const CustomNavbar = () => {
  return (
    <Navbar fluid rounded>
        <Navbar.Brand href="/">
        <Image
            src={"/coder1.avif"}
            width={100}
            height={40}
            className="rounded-full mt-10 mb-10"
            alt="Coding Image"
          />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Hunter Coder</span>
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
