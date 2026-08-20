const messageModel = require("../models/messageModel");

const sendMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "FIeld Name, email, dan message wajib diisi",
    });
  }

  const data = { name, email, subject: subject || "", message };

  messageModel.createMessage(data, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal menyimpan pesan",
        error: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Pesan Berhasil Di kirim dan disimpan",
      data: {
        id: results.insertId,
        name,
        email,
        subject,
        message,
      },
    });
  });
};

const getMessage = (req, res) => {
  messageModel.getAllMessages((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal Mengambil Data Pesan",
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "Data Pesan Berhasil DI Ambil",
      error: results,
    });
  });
};

module.exports = {
    sendMessage,
    getMessage
};

