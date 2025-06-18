const express = require("express");
const routes = require("./routes");
require("./config/db_config")

// Configurações para o express usar
const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port);

