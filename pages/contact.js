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
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Enter your name" />
        </div>
        <TextInput id="name" name='name' type="text" sizing="md" value={name} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Enter Email" />
        </div>
        <TextInput id="email" name='email' type="text" sizing="md" value={email} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Enter your number" />
        </div>
        <TextInput id="phone" name='phone' type="text" sizing="md" value={phone} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="desc" value="Enter your description" />
        </div>
        <Textarea id="desc" placeholder="Description" required rows={4} onChange={handleChange} name='desc' value={desc} />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Contact
