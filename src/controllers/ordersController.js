import Orders from "../models/Orders.js";

/**
 * This function add orders to the database
 * @param {*} req request  {body}
 * @param {*} res response {json}
 * @param {*} next
 */
export const addOrder = async (req, res, next) => {
  try {
    const newOrder = new Orders(req.body);
    await newOrder.save();
    res.json({ message: "Added!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function get all orders in the database
 * @param {*} req
 * @param {*} res response {json}
 * @param {*} next
 */
export const getOrder = async (req, res, next) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function get a order by Id from the database
 * @param {*} req request  {params}
 * @param {*} res response {json}
 * @param {*} next
 */
export const getOrderById = async (req, res, next) => {
  try {
    const order = await Orders.findById(req.params.orderId);
    order ? res.json(order) : res.json({ message: "order not found" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function update a order by id
 * @param {*} req {req.params.orderId}
 * @param {*} res {json(order)}
 * @param {*} next
 */
export const updateOrder = async (req, res, next) => {
  try {
    const order = await Orders.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
    });
    res.json(order);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function delete a order by id
 * @param {*} req {req.params.orderId}
 * @param {*} res {json(message)}
 * @param {*} next
 */
export const deleteOrder = async (req, res, next) => {
  try {
    await Orders.findByIdAndDelete(req.params.orderId);
    res.json({ message: "Deleted!" });
  } catch (error) {
    console.log(error);
    next();
  }
};
