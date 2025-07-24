import app from "./app.js";
import config from "./config/config.js";

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    return;
  }
  console.info("Server started on port %s.", config.port);
});
