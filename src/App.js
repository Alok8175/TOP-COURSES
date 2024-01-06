import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  // ajb tak fetchData se data nhi aaya hai tab tak loading wala spinner dikhana hai so 
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);  //initially all wali category p hai filter

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);   // poore object ka dekhege to sara data , data name ki key me hai esliye object.data 
    }

    catch (error) {
      toast.error("ERROR");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  // useEffect se api fetch kr rhe hai hai jisme sara data hai to phle render hoga compom=nent tab 
  // uske bad use Effect execute hoga yani api fetch hoga aur data  milega 
  // agr yha hm loading hta de to error aayega quki courses me null data rhega jab use effect execute nhi hota
  // so if we want to remove this so pass empty arrayy [] insted of null
  return (

    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar ></Navbar>
      </div>

      <div className=" bg-gray-600 min-h-[94vh] max-h-full ">
        <div>
          <Filter filterdata={filterData} category={category} setCategory={setCategory} ></Filter>
        </div>

        <div>
          {/* cards me hmesha sare card hi nhi dikhege usme laoding spinner bhi dikhega  */}
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} ></Cards>)
          }
        </div>
      </div>


    </div>
  );
};

export default App;
