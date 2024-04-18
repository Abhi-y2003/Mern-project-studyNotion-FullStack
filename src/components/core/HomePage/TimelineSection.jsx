import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import TimelineImage from '../../../assets/Images/TimelineImage.png'


const timeline= [
    {
        Logo: Logo1,
        heading: "Leadership",
        description:"Fully committed to the success company"
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        description:"Fully committed to the success company"
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        description:"Fully committed to the success company"
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        description:"Fully committed to the success company"
    },
]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex gap-24 items-center my-20'>

            <div className='w-[45%] flex flex-col gap-5'>
                {
                    timeline.map( (element, index) =>{
                        return(
                            <div className='flex gap-6 ' key={index}>

                                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={element.Logo}/>
                                </div>

                                <div>
                                    <h2 className='font-semibold text-[18px] '>{element.heading}</h2>
                                    <p className='text-base'>{element.description}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className='relative shadow-blue-200 w-full'>
                
                <img src={TimelineImage} alt='timeline image'
                className='rounded-lg shadow-white object-cover h-fit'/>

                <div className='absolute bg-caribbeangreen-700 flex text-white uppercase py-10'>

                    <div>
                        <p className='text-3xl font-bold'>10</p>
                        <p>Years of Experience</p>
                    </div>

                </div>


            </div>

        </div>
    </div>
  )
}

export default TimelineSection