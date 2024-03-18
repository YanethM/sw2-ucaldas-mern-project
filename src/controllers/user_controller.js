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

    const newUser = await userModel.create({
      user_name,
      lastname,
      nacionality,
      document,
      user_email,
      password,
      user_active,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      user_name,
      lastname,
      nacionality,
      document,
      user_email,
      password,
      user_active,
    } = req.body;

    const user = await userModel.findByIdAndUpdate(id, {
      user_name,
      lastname,
      nacionality,
      document,
      user_email,
      password,
      user_active,
    });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  listUsers,
  getUser,
  editUser,
  deleteUser,
};
