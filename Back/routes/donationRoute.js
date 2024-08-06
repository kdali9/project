import express from "express"
import {addDonation,listDonation,removeDonation} from "../controllers/donationController.js"
import multer from "multer"

const donationRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


donationRouter.post("/add",upload.single("image"),addDonation)
donationRouter.get("/list",listDonation)
donationRouter.post("/remove",removeDonation);



export default donationRouter;