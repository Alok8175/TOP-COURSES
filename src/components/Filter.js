import React from "react";
// import { filterData } from "../data";
function Filter(props) {
    let filterdata = props.filterdata;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <div className="flex  flex-wrap p-6 max-w-[1200px] gap-4 justify-center m-auto ">
            {
                filterdata.map((data) => {
                    return (<button className={` bg-slate-900 p-1 px-2 rounded-md text-white font-bold hover:bg-slate-800 
                     border-2 border-slate-900 hover:border-white hover:bg-opacity-50 
                     ${category === data.title ? " border-white " : "border-null"} `} key={data.id}
                        onClick={() => filterHandler(data.title)} >{data.title}</button>)
                })
            }
        </div>
    );
}

export default Filter;