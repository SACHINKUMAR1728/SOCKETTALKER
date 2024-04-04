import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generatetoken.js";

export const signup = async (req, res) => {
    try {

        const { fullname, username, password, confirm, gender } = req.body;
       
        if (password !== confirm) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyprofile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilepic: gender === "male" ? boyprofile : girlprofile
        });
        if (newUser) {           
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilepic: newUser.profilepic
            })
            console.log("User created successfully");

        }
    }
    catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal server error" });
    }

};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(404).json({ message: "Invalid username or password" });
        }
        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic
        });


    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal server error" });

    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        });
        res.status(200).json({ message: "Logged out successfully" });

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

