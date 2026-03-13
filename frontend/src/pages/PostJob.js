import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostJob() {

const [title,setTitle] = useState("");
const [company,setCompany] = useState("");
const [location,setLocation] = useState("");
const [description,setDescription] = useState("");

const navigate = useNavigate();

async function handleSubmit(e){

e.preventDefault();

const newJob = {
title,
company,
location,
description,
logo: `https://www.google.com/s2/favicons?sz=64&domain=${company.toLowerCase()}.com`
};

try{

await axios.post("https://job-portal-9irl.onrender.com/api/jobs", newJob);

navigate("/jobs");

}catch(err){

console.log(err);

}

}

return(

<div className="bg-gray-100 min-h-screen flex justify-center items-center">

<form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-96">

<h2 className="text-2xl font-bold mb-6 text-center">
Post Job
</h2>

<input
className="border p-2 w-full mb-4 rounded"
placeholder="Job Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
className="border p-2 w-full mb-4 rounded"
placeholder="Company"
onChange={(e)=>setCompany(e.target.value)}
/>

<input
className="border p-2 w-full mb-4 rounded"
placeholder="Location"
onChange={(e)=>setLocation(e.target.value)}
/>

<textarea
className="border p-2 w-full mb-4 rounded"
placeholder="Job Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<button className="bg-blue-600 text-white w-full p-2 rounded">
Post Job
</button>

</form>

</div>

)

}

export default PostJob;