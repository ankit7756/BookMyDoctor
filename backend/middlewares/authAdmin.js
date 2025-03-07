import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try {
        let token = null;
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        } else if (req.headers.admintoken) {
            token = req.headers.admintoken;
        }

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login again!" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Not Authorized, Login again!" });
        }
        req.admin = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ success: false, message: "Invalid or expired token!" });
    }
};

export default authAdmin;

