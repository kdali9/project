import mongoose from "mongoose"

const donationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    goalAmount:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},  
})

const donationModel = mongoose.models.donation || mongoose.model("donation",donationSchema);


export default donationModel;