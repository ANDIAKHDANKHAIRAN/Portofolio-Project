const express = require("express");
const router = express.Router();

router.get("/api/hero", (req, res) => {
    res.json({
        name: "Akhdan",
        peran: "Fullstack Developer",
        deksripsi: "Saya seorang Fullstack Developer yang berfokus pada pengembangan aplikasi web menggunakan teknologi modern. Saya memiliki pengalaman dalam membangun aplikasi yang responsif dan efisien, serta mampu bekerja dengan tim untuk mencapai tujuan proyek.",
    });
});

module.exports = router;