import express from "express"
import {addCharity, listCharity,removeCharity} from "../controllers/donationControllers.js"
import multer from "multer"

const charityRouter = express.Router();

//image storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

charityRouter.post("/add",upload.single("image"),addCharity);
charityRouter.get("/list",listCharity);
charityRouter.post("/remove",removeCharity);







export default charityRouter;