const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
//db
require("./db/mongoose");
// routes
app.use("/api/", apiRouter);

//server
app.listen(port, () => {
  console.log(`serwer slucha na porcie ${port}`);
});
