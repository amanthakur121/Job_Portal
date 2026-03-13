const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const jobRoutes = require("./routes/jobRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/jobs", jobRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected")

    const PORT = process.env.PORT || 5000

    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(err=>console.log(err))