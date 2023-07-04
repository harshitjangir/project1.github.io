i//mport { useState } from "react"
import React,{useState} from 'react'

export default function File_1() {
  const [name, seteName]= useState('')
  const [trmc, setTrmc]= useState('')
  const [intrest,setIntrest]= useState('')
 const getformData=(e)=>{

 e.preventDefault()
  }
  return (
    <div> <div>
    <h1>handle forme</h1>
    <form onSubmit={getformData}>
      <input type="text" placeholder='Enter the value' onChange={(e)=>seteName(e.target.value)} />

      <select onChange={(e)=>setIntrest(e.target.value)}>
      <option>select Option</option>
      <option>Marval</option>
      <option>DC</option>
      <input type='checkbox' onChange={(e)=>setTrmc(e.target.checked)} >Accept term and condition</input>
      <button type='submit' >Submit</button>
      </select>
    </form>
  </div></div>
  )
}
