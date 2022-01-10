import ClientsModel from "../models/ClientsModel.js"

export const newClient = async (req, res) => {
  const { name, lastName, company, email, phoneNumber } = req.body;
  const newClient = new ClientsModel({
    name, lastName, company, email, phoneNumber
  })
  await newClient.save();
  res
    .json("Yiiiiiw")
}

export const getClients = async (req, res) => {
  const clients = await ClientsModel.find()
  res
    .json(clients)
}