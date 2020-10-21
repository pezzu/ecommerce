const express = require("express");
const path = require("path");

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 8090;

app.use(express.json());

app.use("/api", routes.routes());

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "../build"))); // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.jresolve(__dirname, "../build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
