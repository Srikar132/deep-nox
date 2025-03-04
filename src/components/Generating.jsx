import React from 'react'
import { loading } from '../assets'

function Generating({className}) {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
      <img className="w-5 h-5 mr-4 animate-spin" src={loading} alt="Loading" />
      DEEPNOx is Detecting ....
    </div>
  )
}

export default Generating