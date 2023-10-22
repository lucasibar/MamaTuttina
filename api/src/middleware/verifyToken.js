const {Users} = require("../db");
const jwt = require("jsonwebtoken")
const {SECRET} = require("../../config")


const verifyToken = async (req, res, next) => {
  let token = req.headers["authorization"].split(" ")[1];



  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    req.rol = decoded.rol;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};


module.exports = {verifyToken};