app.get("/", (req, res) => {
  res.json({
    message: "PiPort API Running",
    status: "ok",
  });
});
