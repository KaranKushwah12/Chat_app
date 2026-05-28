import app from "./app.js";
import { ENV } from "./lib/env.js";

import connectdb from "./lib/db.js";

const PORT = ENV.PORT || 8080;

connectdb();

app.listen(PORT, () => {
  console.log("Server is running at the port http://localhost:8080");
});
