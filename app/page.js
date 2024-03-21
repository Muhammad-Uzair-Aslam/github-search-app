"use client"
import { Breadcrumb } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  var [userName,setUserName]=useState("")
  var [email,setEmail]=useState("")
  var [number,setNumber]=useState()
  const onChangeHandler=(e)=>{
    console.log(e.target.value)
    setUserName(e.target.value)
  }
  const onChangeEmail=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  const onChangeNumber=(e)=>{
    console.log(e.target.value)
    setNumber(e.target.value)
  }
  return (
  <div>
    <h1>Form data</h1>
    <input onChange={(e)=>onChangeHandler(e)} type="text" placeholder="Enter Your Name"/><br/>
    <input onChange={(e)=>onChangeEmail(e)} type="email" placeholder="Enter Your Email"/>
    <input onChange={(e)=>onChangeNumber(e)} type="number" placeholder="Enter Your Number"/>
    <hr/><hr/>
    <p>UserName is: {userName}</p>
    <p>Email is: {email}</p>
    <p>Number is: {number}</p>
  
  </div>
  );
}
