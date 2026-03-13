const express = require("express")
const router = express.Router()

const Job = require("../models/Job")

// GET jobs

router.get("/", async(req,res)=>{
const jobs = await Job.find()
res.json(jobs)
})

// POST job

router.post("/", async(req,res)=>{
const newJob = new Job(req.body)
await newJob.save()
res.json(newJob)
})

module.exports = router