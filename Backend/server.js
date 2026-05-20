import app from "./src/app.js";
import connectdb from "./src/db/db.js";

const PORT = process.env.PORT || 8080;

connectdb();

app.listen(PORT, () => {
  console.log("Server is running at the port http://localhost:8080");
});
