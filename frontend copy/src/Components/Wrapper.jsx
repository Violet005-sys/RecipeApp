// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'

// eslint-disable-next-line react/prop-types
const Wrapper = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="container">
            {children}
        </div>
            
        
    </>
  )
}

export default Wrapper