import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-b from-richblue-500  to-blue-100  text-transparent bg-clip-text'>
        {" "}
        {text}
    </span>
  )
}

export default HighlightText;