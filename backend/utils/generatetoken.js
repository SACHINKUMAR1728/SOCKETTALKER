import jwt from 'jsonwebtoken';
const generateToken = (userid, res) => {
    const token = jwt.sign({ userid }, process.env.SECRET_KEY, {
        expiresIn: "15d"
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // cookie cannot be accessed or modified by the browser
        secure: "true" // cookie is sent only over HTTPS
    });
};

export default generateToken;