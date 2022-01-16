import Users from "../models/Users.js";
import Bcrypt from "bcrypt"


// ------------ ADDING A NEW USER --------

export const addUser = async (req, res) => {

  const { name, email, password } = req.body;
  const newUser = new Users(req.body);
  const saltRounds = 10
  // console.log(password)
  //! AL FINAL LO METÍ COMO JSON y no como encoded de los huevos
  const hashedPassword = await Bcrypt.hash(password, saltRounds)
  newUser.password = hashedPassword
  //! FLIPA YA, AWAIT CONSOLE.LOG()!!
  // await console.log(newUser.password)


  try {
    await newUser.save({
      name, email, hashedPassword
    })
    res.json({ message: "Added!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "There was an error!" })
  }
};


// ------------ GETTING ALL USERS --------

export const getUsers = async (req, res, next) => {
  console.log(res)
  try {
    const users = await Users.find()
    res.json(users)
  } catch (error) {
    console.log(error)
  }
  next()
}

// ------------ LOGIN FUNCTION : AUTHENTICATION --------

export const Login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await Users.findOne({ email })
  console.log(email)
  console.log(password)
  try {
    if (!user) {
      await res.status(401).json({ message: "This account doesn't exist" })
      next()
    } else {
      if (!Bcrypt.compareSync(password, user.password)) {
        await res.status(401).json({ message: "Incorrect Password" })
        next()
      }
    }
  } catch (error) {
    console.log(error)
  }

}

// /**
//  * This function get all Users in the database
//  * @param {*} req
//  * @param {*} res response {json}
//  * @param {*} next
//  */
// export const getProduct = async (req, res, next) => {
//   try {
//     const products = await Products.find();
//     res.json(products);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// /**
//  * This function get a product by Id from the database
//  * @param {*} req request  {params}
//  * @param {*} res response {json}
//  * @param {*} next
//  */
// export const getProductById = async (req, res, next) => {
//   try {
//     const product = await Products.findById(req.params.productId);
//     product ? res.json(product) : res.json({ message: "product not found" });
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// /**
//  * This function update a product by id
//  * @param {*} req {req.params.productId}
//  * @param {*} res {json(product)}
//  * @param {*} next
//  */
// export const updateProduct = async (req, res, next) => {
//   try {
//     console.log(req.file);
//     if (req.file !== undefined && req.file.filename) {
//       req.body.image = req.file.filename;
//     }

//     const product = await Products.findByIdAndUpdate(
//       req.params.productId,
//       req.body,
//       { new: true }
//     );
//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// /**
//  * This function delete a product by id
//  * @param {*} req {req.params.productId}
//  * @param {*} res {json(message)}
//  * @param {*} next
//  */
// export const deleteProduct = async (req, res, next) => {
//   try {
//     await Products.findByIdAndDelete(req.params.productId);
//     //todo implement DELETE IMAGES TOO
//     res.json({ message: "Deleted!" });
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// /**
//  * This function uploads a product image
//  * @param {*} req request  {params}
//  * @param {*} res response {json}
//  * @param {*} next
//  */
// export const searchProduct = () => { }