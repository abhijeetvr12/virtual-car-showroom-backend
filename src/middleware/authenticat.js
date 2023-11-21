const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
    try {
        console.log("Headers:", req.headers); // Log the headers
        const token = req.headers.authorization?.split(" ")[1];
        console.log("Token:", token);

        if (!token) {
            return res.status(401).send({ message: "Unauthorized: Token not found" });
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);

        if (!user) {
            return res.status(401).send({ message: "Unauthorized: Invalid user" });
        }

        req.user = user;
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
    next();
};

module.exports = authenticate;
