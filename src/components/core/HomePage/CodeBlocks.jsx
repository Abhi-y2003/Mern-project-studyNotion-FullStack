import React from 'react';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import red from '../../../assets/Images/red.jpg'
import blue from '../../../assets/Images/blue.jpg'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor, color
}) => {
  return (
    <div className={`md:flex ${position} my-24 justify-between gap-10 flex-col mb-32 `}>

        {/*Section 1 */}
        <div className='md:w-[50%] flex flex-col gap-8 sm:w-11/12 sm:mx-auto sm:m-10 '>
            {heading}
            <div className='text-richblack-300 w-fit'>
                {subheading}
            </div>

            <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>

        </div>

        {/*Section 2 */}
        <div className='flex flex-row h-fit  w-[100%] lg:w-[500px] gap-16 z-50 sm:w-11/12 md:w-[50%]  outline-1 outline-offset-0 outline-richblack-400 mx-auto relative bg-richblack-800'>

          <div className='absolute -z-20 blur-3xl  w-[38%] '>
            <img src={color === "red"? red : blue}/>
          </div>
          <div className='flex backdrop-blur-3xl w-full shadow-transparent py-5 '>
            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>

            <div className={`w-[90%]  flex flex-col gap-2 font-bold font-mono ${codeColor}  pr-2`}>
                <TypeAnimation 
                sequence={[codeblock, 2000 ,""]}
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true}
                style={
                    {
                        display:"block",
                        whiteSpace:"pre-line"
                    }
                }
                />

            </div>
            </div>
        </div>

        <div className='h-40'>

        </div>



    </div>
  )
}

export default CodeBlocks