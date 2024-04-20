import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore' ;
import CourseCard from "./courseCard";
import HighlightText from './HighlightText';

const tabsName =  [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] =useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);


    const setMyCard = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter( (courses) => courses.tag === value); 
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
  return (
    <div>

        <div className='text-4xl font-semibold text-center mt-24'>
            Unlock the
            <HighlightText text={"Power of Code"}/>
        </div>

        <p className='text-center text-richblack-300 text-base mt-3'>
            Learn to build anything you can imagine
        </p>


        <div className='flex rounded-full bg-richblack-800 gap-2 mb-5 mt-5 border-richblack-400 p-1'>
            {
                tabsName.map( (element, index)=>{
                    return (
                        
                        <div 
                        className={`text-lg flex item center flex-row gap-2
                        ${currentTab === element ? "bg-richblack-900 text-richblack-5" 
                    : " bg-richblack-800"} rounded-full transition-all duration-200 cursor-pointer
                    hover:bg-richblack-900 hover:text-richblack-5 px-7  py-2`} key={index}
                    onClick={() => setMyCard(element)}>
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className='lg:h-[150px]'></div>


        {/*Course cards ka group*/}
        <div className='flex'>
            {
                courses.map( (element, index)=> {
                    return <courseCard 
                        key={index}
                        cardData={element}
                        currentCard = {currentCard}
                        setCurrentCard = {setCurrentCard}
                        />
                })
            }
        </div>
    </div>
  )
}

export default ExploreMore