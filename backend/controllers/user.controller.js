import User from "../models/user.model.js";

const userforsidebar = async (req, res) => {
    try {
        const logginIdUserId = req.user._id;
        const users = await User.find({ _id: { $ne: logginIdUserId } }).select("fullname profilepic");
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in userforsidebar: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }

}

export default userforsidebar;