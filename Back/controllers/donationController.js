import { Console } from "console";
import donationmodel from "../models/donationModel.js";
import fs from 'fs'


//add donation items

const addDonation = async (req,res) =>{
    let image_filename = `${req.file.filename}`;

    const donation = new donationmodel({
       name:req.body.name,
       description:req.body.description,
       goalAmount:req.body.goalAmount,
       category:req.body.category,
       image:image_filename
    })
    try{
        await donation.save();
        res.json({success:true,message:"Charity Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }

}

//all donation list
const listDonation = async (req,res) => {
    try{
        const donation = await donationmodel.find({});
        res.json({success:true,data:donation})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }

}
// remove donation item

const removeDonation = async(req,res) =>{
    try{
        const donation = await donationmodel.findById(req.body.id);
        fs.unlink(`uploads/${donation.image}`,()=>{})

        await donationmodel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Donation Removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }

}

export {addDonation,listDonation,removeDonation}