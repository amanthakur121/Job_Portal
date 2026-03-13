import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

function App() {

const [jobs,setJobs] = useState([
{
title:"Frontend Developer",
company:"Google",
location:"Remote",
description:"Build modern React applications for millions of users.",
logo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
},
{
title:"Backend Developer",
company:"Amazon",
location:"Delhi",
description:"Develop scalable backend services using Node.js.",
logo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
},
{
title:"Full Stack Developer",
company:"Microsoft",
location:"Bangalore",
description:"Work on both frontend and backend systems.",
logo:"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
}
]);

return (

<BrowserRouter>

<Navbar />

<Routes>


<Route path="/" element={<Home />} />

<Route path="/jobs" element={<Jobs jobs={jobs} />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/postjob" element={<PostJob jobs={jobs} setJobs={setJobs} />} />

</Routes>

<Footer/>
</BrowserRouter>

);

}

export default App;