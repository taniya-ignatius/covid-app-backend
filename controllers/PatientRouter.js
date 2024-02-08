const express=require("express")
const router=express.Router()

const patientModel=require("../model/PatientModel")
router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientModel(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})

module.exports=router