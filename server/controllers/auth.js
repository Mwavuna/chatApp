import {db} from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register= (req, res) => {
   //check if user exists
   const q = "SELECT * FROM Users WHERE email = ?"
   console.log(req.body);
   db.query(q, [req.body.email],(err,data)=>{
    if(err) return res.status(500).json(err);
    if(data.length) return res.status(409).json("User already exists");
 
    //create user

    //Generate salt:string of random characters to make the password more secure
    const salt = bcrypt.genSaltSync(10);

    //Hash the password
    const hash = bcrypt.hashSync(req.body.password, salt);
    const q = "INSERT INTO Users(`username`,`email`,`password`,`name`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        hash,
        req.body.name
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
    });

   });
   

}

export const login= (req, res) => {
    //check if user exists
    const query="SELECT * FROM Users WHERE email=?";
    db.query(query,req.body.email,(err,data)=>{
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status(404).json("User not found");
        
        const checkPassword=bcrypt.compareSync(req.body.password,data[0].password);
        if(!checkPassword) return res.status(400).json("Wrong password or username")
        
        const token=jwt.sign()
        return res.status(200).json(data[0]);

    });
    
}

export const logout= (req, res) => {
    
}
export const getAuth= (req, res) => {
    res.send('Get Auth');
}