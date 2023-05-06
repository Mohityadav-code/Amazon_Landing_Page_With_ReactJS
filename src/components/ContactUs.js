import React, { useState } from 'react'

export default function ContactUs() {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
        console.log(phoneNo);
        alert(JSON.stringify(details));
        console.table(details)
    }
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const details={
        name:name,
        email:email,
        message:message,
        phoneNo:phoneNo

        }
    return (
    <div className='flex '>
        <form action="" onSubmit={submitHandler}>

        <label htmlFor="name">Name</label>
        <input  className='bg-gray-300 rounded-md text-black p-2 m-2'  type="text" name="name" id="name"  value={name} onChange={(e)=>setName(e.target.value)} />
       <label htmlFor="email">Email</label>
        <input  className='bg-gray-300 rounded-md text-black p-2 m-2' type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <label htmlFor="message">Message</label>
        <input className='bg-gray-300 rounded-md text-black p-2 m-2'  name="message" id="message"  value={message}  onChange={(e)=>setMessage(e.target.value)}></input>
        <label htmlFor="phoneNo">Phone No</label>
        <input  className='bg-gray-300 rounded-md text-black p-2 m-2' type="text" name="phoneNo" id="phoneNo" value={phoneNo}  onChange={(e)=>setPhoneNo(e.target.value)}/>
        <button className='bg-red-300 rounded-md text-black p-2 m-2'  type="submit">Submit</button>

        </form>
    </div>
  )
}
