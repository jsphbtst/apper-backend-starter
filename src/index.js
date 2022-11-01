const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send({ message: "hello world" });
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
