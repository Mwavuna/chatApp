import express from "express"
import {getComments} from "../controllers/comment.js"

const router=express.Router()
router.get("/findComment:postId",getComments)

export default router
