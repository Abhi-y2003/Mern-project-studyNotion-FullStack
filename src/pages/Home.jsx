import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';

const Home = () => {
  return (
    <div>

        {/* section 1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent '>

            <Link to={"/signup"}>
                <div className='group mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                                transition-all duration-200 hover:scale-100 w-fit mt-16 p-1 shadow-xl'>
                    <div className='flex items-center gap-2 rounded-full px-10 py-2 transition-all duration-200
                                    group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='mt-7 text-center text-3xl font-semibold'>
                Empower Your Future with 
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className='w-[90%] text-center text-md text-richblack-300 mt-4'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 

            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                    Book A Demo
                </CTAButton>

            </div>


            <div className='shadow-blue-200 mx-3 -scroll-my-14'>
                <video muted loop autoPlay>
                    <source src={Banner} type="video/mp4/"/>
                </video>
            </div>



            {/*Code Section 1*/}
            <div>
                <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className="text-4xl font-semibold">
                      Unlock your
                      <HighlightText text={"coding potential"} /> with our online
                      courses.
                    </div>
                  }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText={}
                    }
                }
                />
            </div>
        </div>





        {/* section 2 */}







        {/* section 3 */}







        {/* Footer */}


    </div>
  )
}

export default Home