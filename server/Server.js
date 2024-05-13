import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config as configDotenv } from "dotenv";
import User from "./schema/UserShema.js";

configDotenv();

const PORT = 9001;
mongoose.connect("mongodb://localhost:27017/twitter_reg").then(console.log("mogodb connection successfully"))

const app = express();
app.use(express.json());
app.use(cors());

async function main() {
    app.post("/register", async(req, res) => {
        const { firstname, lastname, email, password, confirmpassword } = req.body;

        const user = await User.findOne({ email: email });

        if (user) { 
            res.status(400).send({
                err_code: "USER_ALREADY_EXISTS",
                message: "User already exists",
            });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        res.send({
            firstname: savedUser.firstname,
            lastname: savedUser.lastname,
            email: savedUser.email,
            logindate: savedUser.logindate,
        });
    });

    app.post("/login", async(req,res) =>{
        const {email,password} =req.body;

        const user =await User.findOne({email:email});
        if(!user){
            res.status(400).send({
                err_code:"USER_NOT_EXIST",
                message:"User doesn't exist",
            });
            return;
        }

        const userpassword =user.password;
        const isPasswordCorrect= await bcrypt.compare(password,userpassword);

        if(!isPasswordCorrect){
            res.status(400).send({
                err_code:"USER_PASSWORD_INCORRECT",
                message:"User password is incorrect",
            });
            return;
        }

        const token = jwt.sign({
            email:user.email,
            logindate:user.logindate
        }, process.env.JWT_SECRET,{
            expiresIn:"1h",
        });

        res.send({
            email:user.email,
            logindate:user.logindate,
            token
        });
    });

    app.post("/verify", async(req,res) =>{
        try{
            const token = req.headers.authorization.split(" ")[1];

            if (!token) {
                return res.status(401).send({ err_code: "NO_TOKEN", message: "Token is missing" });
            }

            const data = jwt.verify(token, process.env.JWT_SECRET);
            res.send(data);
        }
        catch(e){
            switch (e.name){
                case "TokenExpiredError":
                    res.status(500).send({
                        err_code: "SESSION_EXPIRED",
                        message: "Session expired! please log in again"
                    });
                    break;
                default:
                    res.status(400).send({
                        err_code: "INVALID_TOKEN",
                        message: "Invalid Token"
                    });
                    break;
            }
        }
    });
}

app.listen(PORT, () => {
    console.log("Server has started at PORT ", PORT);
});

main();
