import React, { useState } from 'react';
import Card from "./Card";
import Empty from './Empty';
// import courses from "../App";

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category == "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })

            });
            return allCourses;
        }
        else {
            // specific data category pass

            return courses[category];
        }

    }

    return (
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4 min-h-[50vh] pb-10 '>

            {
                (courses.length == 0) ? (<Empty />) : getCourses().map((course) => {

                    return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />)

                })


            }

        </div>
    );
}

export default Cards;