import express from "express"
import {getPost} from "../controllers/post.js"

const router=express.Router()
router.get("/findPost:postId",getPost)

export default router
