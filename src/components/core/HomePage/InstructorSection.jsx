import React from 'react';
import instructorImage from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText';
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className='mt-16'>

        <div className='flex flex-col md:flex-row gap-20 items-center'>

            <div className='w-[50%]'>
                <img src={instructorImage}  />
            </div>

        

        <div className='w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semibold w-[50%] '>
                Become an 
                <HighlightText text={'Instructor'}/>
            </div>

            <p className='text-pure-greys-500 font-medium text-lg w-[80%]'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3 text-base font-semibold font-inter'>
                    Start teaching today
                    <FaArrowRight/>
                </div>

            </CTAButton>

            </div>


            

        </div>
        </div>
    </div>
  )
}

export default InstructorSection