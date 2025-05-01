import express from "express"
import {getAuth,register,login,logout} from "../controllers/auth.js"


const router=express.Router()
router.get("/getAuth:password",getAuth)
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
export default router
