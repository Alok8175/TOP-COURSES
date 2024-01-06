import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // agr phle se koi like hai to use remove krege
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else {
            // agr liked nhi hai to use like krege
            if (likedCourses.length == 0) {
                setLikedCourses([course.id]);
                toast.success("Liked");
            }
            else {
                setLikedCourses((prev) => [...prev, course.id])
                toast.success("Liked");

            }

        }
    }
    return (
        <div className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden text-white ">
            <div className=" relative ">
                <img src={course.image.url} />
                <div className=" w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 flex justify-center ">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />) :
                                (<FcLikePlaceholder fontSize="1.75rem" />)

                        }
                    </button>
                </div>
            </div>
            <div className=" p-4 flex flex-col gap-4 ">
                <p className=" font-bold text-lg  leading-6">{course.title}</p>
                <p className="">
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;