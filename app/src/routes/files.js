const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "..", "..", "uploads");

// GET /api/files/:filename - lê e devolve o conteúdo de um arquivo da pasta uploads/
router.get("/:filename", (req, res) => {
  const filename = req.params.filename;

  // Permite apenas nomes simples, sem caminhos ou diretórios
  if (
    typeof filename !== "string" ||
    !/^[a-zA-Z0-9._-]+$/.test(filename) ||
    filename === "." ||
    filename === ".."
  ) {
    return res.status(400).json({ error: "Nome de arquivo inválido" });
  }

  const filePath = `${UPLOADS_DIR}/${filename}`;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).json({ error: "Arquivo não encontrado" });
    res.type("text/plain").send(data);
  });
});

module.exports = router;