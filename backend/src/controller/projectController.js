const projectModel = require("../models/projectModel");

const getProject = (req, res) => {
  projectModel.gettAllProjects((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data proyek",
        error: err.message,
      });
    }
    res.json({
      success: true,
      message: "Data Proyek Berhasil Di Ambil",
      data: results,
    });
  });
};

const getProjectDetail = (req, res) => {
  const { id } = req.params;
  projectModel.getProjectById(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal Mengambil Data Proyek ",
        error: err.message,
      });
    }
    if (!results) {
      return res.status(400).json({
        success: false,
        message: "Proyek tidak Ditemukan",
      });
    }
    res.json({
      success: true,
      message: "Detail Proyek Berhasil DIambil",
      data: results,
    });
  });
};

module.exports = {
  getProject,
  getProjectDetail,
};
