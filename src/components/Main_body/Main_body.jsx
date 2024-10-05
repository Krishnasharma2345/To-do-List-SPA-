import React from "react";
import { useState } from "react";
import Task_division from "../Task_division/Task_division";

const Main_body = () => {
  const [data, setdata] = useState({});
  const [formdata, setformdata] = useState([]);

  async function handlechange(e) {
    let { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }

  function handlesumbit() {
    let newdata = { ...data, date: Date.now() };
    setformdata([...formdata, newdata]);
  }

  function handledelete(e){
    setformdata(formdata.filter(i => i.date !== e))
  }

  return (
    <div>
      <h1 className="font-bold text-5xl text-center mt-24"> To Do List</h1>
      <div className="m-4 w-[80%] flex justify-evenly my-16 mx-10 text-center">
        <input
          className="outline-none rounded-md bg-green-200 p-1 w-[70%] ml-16 placeholder:text-black  "
          type="text"
          name="title"
          placeholder="What is your task?"
          onChange={handlechange}
        />
        <button
          onClick={handlesumbit}
          className=" bg-green-400 px-4 pt-2 pb-1 font-semibold rounded-lg hover:scale-125 transition-all hover:cursor-pointer"
        >
          Create Task
        </button>
      </div>
      <Task_division handledelete={handledelete} formdata={formdata} />
    </div>
  );
};

export default Main_body;
