const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Middleware
    this.middlewares();

    //Rutas de la app
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parseo y lectura body (post, put, etc)
    this.app.use(express.json());

    //directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users")); //Ahora el nuevo endpoint es /api/users
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriento en puerto", this.port);
    });
  }
}

module.exports = Server;
