import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';

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


            <div className='shadow-blue-200 mx-3 my-14'>
                <video muted loop autoPlay>
                    <source src={Banner} type="video/mp4"/>
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
                        btnText: "Try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }

                ctabtn2={
                    {
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                codeColor={"text-yellow-25 "}
                color={"red"}

                />
            </div>


             {/*Code Section 2*/}
             <div>
                <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className="text-4xl font-semibold">
                      Start
                      <HighlightText text={"coding in seconds"} /> 
                    </div>
                  }
                subheading={
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }

                ctabtn2={
                    {
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                codeColor={"text-yellow-25"}
                color={"blue"}

                />
            </div>

            <ExploreMore/>
        </div>





        {/* section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
             <div className='homepage_bg h-[333px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 justify-between mx-auto'>
                   
                   <div className='h-[150px]'></div>
                    <div className='flex flex-col md:flex-row gap-7 text-white'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Explore full catalog
                                <FaArrowRight/>
                            </div>

                        </CTAButton>

                        <CTAButton active={false} linkto={"/signup"}>
                                Learn More
                                
                            

                        </CTAButton>

                    </div>

                </div>

             </div>

             <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-col md:flex-row sm:mx-auto gap-5 mb-10 mt-[95px] justify-evenly'>
                    
                    <div className='text-4xl font-semibold md:w-[45%] w-fit '>
                        Get the skills you need for a 
                        <HighlightText text={" Job that is in Demand."}/>
                    </div>
                    
                    
                    <div className="md:w-[40%] flex flex-col gap-10 items-start w-fit">
                        <div className='text-sm text-pure-greys-500 font-semibold'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            Learn More
                        </CTAButton>
                    </div>
                </div>


                <TimelineSection/>


                <LearningLanguageSection/>

             </div>


            
        </div>









        {/* section 3 */}

        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col item-center justify-between gap-8
        first-letter bg-richblack-900 text-white'>

        <InstructorSection/>

            <h2 className='text-center text-4xl font-semibold mt-10'>
                Review from other learners
            </h2>

        


        </div>







        {/* Footer */}
        <Footer/>


    </div>
  )
}

export default Home