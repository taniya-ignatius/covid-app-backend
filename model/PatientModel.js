const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        mobile:String,
        symptoms:String,
        status:String
    }
)
module.exports=mongoose.model("patients",patientSchema)