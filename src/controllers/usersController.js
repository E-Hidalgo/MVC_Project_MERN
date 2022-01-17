import Users from "../models/Users.js";
import { Jwt } from "jsonwebtoken";
import Bcrypt from "bcryptjs"


// ------------ ADDING A NEW USER --------

export const addUser = async (req, res) => {

  const { name, email, password } = req.body;
  const newUser = new Users({
    name,
    email,
    // ------------ STATIC FUNCTION FROM USERS MODEL -------------
    password: await Users.encryptPassword(password)
  })

  try {
    await newUser.save()
    res.json({ message: "Added!", newUser });
  } catch (error) {
    console.log(error);
    res.json({ message: "There was an error!" })
  }
};


// // ------------ GETTING ALL USERS --------

// export const getUsers = async (req, res, next) => {
//   console.log(res)
//   try {
//     const users = await Users.find()
//     res.json(users)
//   } catch (error) {
//     console.log(error)
//   }
//   next()
// }

// ------------ LOGIN FUNCTION : 1º STEP FOR AUTHENTICATION --------

export const Login = async (req, res, next) => {
  const { email, password } = req.body;
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

