const userModel = require("../models/user_model");

const createUser = async (req, res) => {
  try {
    const {
      user_name,
      lastname,
      nacionality,
      document,
      user_email,
      password,
      user_active,
    } = req.body;
    console.log(req.body);
  } catch (error) {}
};


const listUsers = async (req, res) => {
  try {
  } catch (error) {}
};
const getUser = async (req, res) => {
  try {
  } catch (error) {}
};
const editUser = async (req, res) => {
  try {
  } catch (error) {}
};
const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  createUser,
  listUsers,
  getUser,
  editUser,
  deleteUser,
};
