import React, { useState, useEffect } from "react";
import axios from "axios";

function Jobs() {

const [jobs,setJobs] = useState([]);
const [titleSearch,setTitleSearch] = useState("");
const [companySearch,setCompanySearch] = useState("");
const [locationSearch,setLocationSearch] = useState("");

useEffect(()=>{

axios.get("https://job-portal-9irl.onrender.com/api/jobs")
.then(res=>{
setJobs(res.data)
})
.catch(err=>{
console.log(err)
})

},[])

const filteredJobs = jobs.filter((job)=>
job.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
job.company.toLowerCase().includes(companySearch.toLowerCase()) &&
job.location.toLowerCase().includes(locationSearch.toLowerCase())
);

return(

<div className="bg-gray-100 min-h-screen p-10">

<h1 className="text-3xl font-bold mb-6 text-center">
Available Jobs
</h1>

{/* SEARCH BAR */}

<div className="bg-white p-6 rounded-xl shadow mb-8 grid md:grid-cols-3 gap-4">

<input
className="border p-2 rounded"
placeholder="Search by job title"
onChange={(e)=>setTitleSearch(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Search by company"
onChange={(e)=>setCompanySearch(e.target.value)}
/>

<input
className="border p-2 rounded"
placeholder="Search by location"
onChange={(e)=>setLocationSearch(e.target.value)}
/>

</div>

{/* JOB CARDS */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{filteredJobs.map((job,index)=>(
<div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">

<div className="flex items-center mb-4">

<img
src={job.logo}
alt="company logo"
className="w-10 h-10 mr-3 object-contain"
onError={(e)=>{
e.target.onerror=null;
e.target.src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
}}
/>

<div>
<h3 className="text-xl font-bold">{job.title}</h3>
<p className="text-gray-600">{job.company}</p>
</div>

</div>

<p className="text-gray-500 mb-2">{job.location}</p>

<p className="text-gray-700 mb-4">
{job.description}
</p>

<button
className="bg-blue-600 text-white px-4 py-2 rounded"
onClick={()=>alert("Application submitted successfully!")}
>
Apply Now
</button>

</div>
))}

</div>

</div>

)

}

export default Jobs;