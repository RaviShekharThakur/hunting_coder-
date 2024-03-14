'use client';
import React, { useState } from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';


const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, desc, phone)
    const data = { name, email, desc, phone };
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postcontact/", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        alert("Thank you for submitting the form")
        setphone('')
        setemail('')
        setdesc('')
        setname('')
      } catch (error) {
        console.error("Error:", error);
      }
    }
    postJSON(data);
  }

  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
  }
  return (
    <form className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
      <div className="mb-4">
        <Label htmlFor="name" value="Enter your name" />
        <TextInput id="name" name="name" type="text" sizing="md" value={name} onChange={handleChange} placeholder="John Doe" />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" value="Enter Email" />
        <TextInput id="email" name="email" type="email" sizing="md" value={email} onChange={handleChange} placeholder="example@example.com" />
      </div>
      <div className="mb-4">
        <Label htmlFor="phone" value="Enter your number" />
        <TextInput id="phone" name="phone" type="tel" sizing="md" value={phone} onChange={handleChange} placeholder="123-456-7890" />
      </div>
      <div className="mb-4">
        <Label htmlFor="desc" value="Enter your description" />
        <Textarea id="desc" name="desc" value={desc} onChange={handleChange} placeholder="Enter your message here" required rows={4} />
      </div>
      <Button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</Button>
    </form>

  )
}

export default Contact
