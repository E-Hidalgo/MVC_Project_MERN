import Users from "../models/Users.js";
import jwt from "jsonwebtoken";
import config from "../config";

/**
 * This function add Users to the database
 * @param {*} req request  {body}
 * @param {*} res response {json}
 */
export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const user = new Users({
    name,
    email,
    password: await Users.encryptPassword(password),
  });
  console.log(user);
  try {
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "Something went wrong" });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  const userFound = await Users.findOne({ email: email });
  if (!userFound) {
    res.json({ message: "User not found", status: 401 });
  } else {
    if (!(await Users.comparePassword(password, userFound.password))) {
      res.json({ message: "invalid password", status: 401 });
      next();
    } else {
      const token = jwt.sign(
        { name: userFound.name, email: userFound.email, _id: userFound._id },
        config.SECRET,
        {
          expiresIn: 43200,
        }
      );
      res.json({ token });
    }
  }
};
