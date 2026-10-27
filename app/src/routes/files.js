const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "..", "..", "uploads");

router.get("/:filename", (req, res) => {
  const filename = req.params.filename;

  if (
    typeof filename !== "string" ||
    !/^[a-zA-Z0-9._-]+$/.test(filename) ||
    filename === "." ||
    filename === ".."
  ) {
    return res.status(400).json({
      error: "Nome de arquivo inválido"
    });
  }

  fs.readdir(UPLOADS_DIR, { withFileTypes: true }, (err, entries) => {
    if (err) {
      return res.status(500).json({
        error: "Erro ao acessar diretório"
      });
    }

    const file = entries.find(
      (entry) => entry.isFile() && entry.name === filename
    );

    if (!file) {
      return res.status(404).json({
        error: "Arquivo não encontrado"
      });
    }

    const filePath = path.join(UPLOADS_DIR, file.name);

    fs.readFile(filePath, "utf8", (readErr, data) => {
      if (readErr) {
        return res.status(404).json({
          error: "Arquivo não encontrado"
        });
      }

      res.type("text/plain").send(data);
    });
  });
});

module.exports = router;