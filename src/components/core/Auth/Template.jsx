import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import HighlightText from '../HomePage/HighlightText'
import frame from '../../../assets/Images/frame.png'

const Template = (title, description1, description2, image, formType) => {
  return (
    <div className='flex w-11/12 mx-auto justify-between'>

        <div className='flex flex-col gap-y-3 w-[45%]'>
            <h1>
                {title}
            </h1>
            
            <p>
                {description1}
                <HighlightText text={description2}/>
            </p>

            {formType === "Signup" ? <SignupForm /> : <LoginForm />}
        </div>

        <div className='relative w-[50%]'>

            <img 
            src={frame}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"/>

            <img className='absolute -top-4 right-4 z-10'
            src={image}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"/>

        </div>




    </div>
  )
}

export default Template