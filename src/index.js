const express = require("express");
const app = express();

app.get("/", (request, response) => {
  // response.setHeader("Set-Cookie", "type-test");
  response.setHeader("year", new Date().getFullYear());
  console.log(request.headers);

  response.send("This is my Express app");
});

app.listen(3000, () => console.log("Listening on port 3000"));
