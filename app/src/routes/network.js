const express = require("express");
const router = express.Router();
const { execFile } = require("child_process");

router.get("/ping", (req, res) => {
  const { host } = req.query;

  if (
    typeof host !== "string" ||
    !/^[a-zA-Z0-9.-]+$/.test(host) ||
    host.length > 253 ||
    host.startsWith("-")
  ) {
    return res.status(400).json({ error: "Host inválido" });
  }

  execFile(
    "ping",
    ["-c", "2", "--", host],
    { timeout: 5000 },
    (error, stdout) => {
      if (error) {
        return res.status(500).json({ error: "Falha ao executar ping" });
      }

      res.json({ host, output: stdout });
    }
  );
});

module.exports = router;