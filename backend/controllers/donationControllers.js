import donationModel from "../models/donationModel.js"
import fs from "fs"


// add donation item

const addCharity = async (req,res)=>{

    let image_filename = `${req.file.filename}`;

    const charity = new donationModel({
        name:req.body.name,
        description:req.body.description,
        goalAmount:req.body.goalAmount,
        category:req.body.category,
        image:image_filename
    })
    try {
        await charity.save();
        res.json({success:true,Message:"Charity Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,Message:"Error"})
        
    }

}

// all charity list
const listCharity = async(req,res)=>{
    try {
        const charity = await donationModel.find({});
        res.json({success:true,data:charity})
    } catch (error) {
        console.log(error);
        res.json({success:false,Message:"Error"})
    }

}

//remove charity item
const removeCharity = async (req,res)=>{
    try {
        const charity = await donationModel.findById(req.body.id);
        fs.unlink(`uploads/${charity.image}`,()=>{})

        await donationModel.findByIdAndDelete(req.body.id);
        res.json({success:true,Message:"Charity Removed"})
    } catch (error) {
        console,log(error);
        res.json({success:false,Message:"Error"})
        
    }

}

export{addCharity,listCharity,removeCharity}