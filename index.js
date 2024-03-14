// Importación del framework express para realizar solicitudes http
const express = require("express");
const app = express();

// Poder acceder a leer archivo .env
require("dotenv").config();
const CONNECTION_PORT = process.env.PORT || 3005;



app.listen(CONNECTION_PORT, () => {
  console.log(`Using the port ${CONNECTION_PORT}`);
});
