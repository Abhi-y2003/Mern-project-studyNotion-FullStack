import React from 'react'
import HighlightText from './HighlightText';
import know_your_progress from '../../../assets/Images/Know_your_progress.png';
import compare_with_others from '../../../assets/Images/Compare_with_others.png';
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png';
import CBTButton from './Button'

const LearningLanguageSection = () => {
  return (
    <div className='flex flex-col gap-5 mt-[120px] items-center mb-24'>
      <div className='text-4xl font-semibold text-center'>
        Your swiss knife for 
        <HighlightText text={"learning any language"}/> 
      </div>

      <p className='font-semibold text-center text-pure-greys-600 mx-auto text-base mt-3 w-[70%]'>
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
      </p>

      <div className='flex flex-col item-center mt-5 lg:flex-row'>
        <img src={know_your_progress} className='object-contain lg:-mr-32 mb-24'/>
        <img src={compare_with_others} className='object-contain'/>
        <img src={plan_your_lessons} className='object-contain lg:-ml-32 -mt-32'/>
      </div>

      <div className='w-fit'>
      <CBTButton active={true} linkto={"/signup"}>
        Learn more
      </CBTButton>
      </div>
      
    </div>
  )
}

export default LearningLanguageSection