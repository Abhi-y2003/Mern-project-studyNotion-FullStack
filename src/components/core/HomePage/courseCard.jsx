import React from 'react'

import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const courseCard = ({CardData, CurrentCard, setCurrentCard}) => {
  return (
    <div className={`w-[30%] 
    ${CurrentCard === CardData?.heading ? 
    "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
    : "bg-richblack-800"}
    text-richblack-25 box-border cursor-pointer`}
    onClick={() =>setCurrentCard(CardData?.heading)}>

        <div className='border-b-2 border-dashed border-richblack-400 h-[80%] p-6 flex flex-col'>

            <div className={` ${CurrentCard === CardData?.heading? "text-richblack-800" : "" }
             font-semibold text-xl`}>
                {CardData?.heading}
            </div>

            <div className='text-base text-richblack-400'>
                {CardData?.description}
            </div>

        </div>

        <div className={`flex justify-between px-6 py-3 font-medium
        ${CurrentCard === CardData?.heading? "text-blue-300" : "text-richblack-400"}`}>

            <div className='flex items-center'>
            <HiUsers />
            <p>{CardData?.level}</p>
            </div>

            <div className='flex items-center'>
            <ImTree />
            <p>{CardData?.lessonNumber} Lession</p>
            </div>
        </div>


        
    </div>
  )
}

export default courseCard