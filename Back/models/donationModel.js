import mongoose from "mongoose";

const charitySchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    goalAmaount:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const donationModel = mongoose.models.charity || mongoose.model("donation",charitySchema);

export default donationModel;