const User = require("../models/userModel");

module.exports = {
  // Get Users
  index: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "Data tidak tersedia atau masih kosong",
        });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  //   Get User By ID
  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapatkan",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  //   Create User
  store: async (req, res) => {
    try {
      const userRequest = await User.create(req.body);
      res.status(200).json({
        status: true,
        data: userRequest,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  //   Update User
  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  //   Delete User
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus",
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
};
