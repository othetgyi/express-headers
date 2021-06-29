const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const host = request.headers["host"];
  host
    ? response.redirect("variant-one.html")
    : response.redirect("variant-two.html");
});

app.listen(3000, () => console.log("Listening on port 3000"));
