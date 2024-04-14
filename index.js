// class Animales {
//  constructor( raza, visitas, nombre, propietario, esterilizado, vacunas, historial ) {
// this.raza = raza;
// this.visitas = visitas;
// this.nombre = nombre;
// this.propietario = propietario;
// this.esterilizado = esterilizado;
// this.vacunas = vacunas;
// this.historial = historial; }}

// class Perro extends Animales {
//  constructor(talla, ppp, leismaniosico, ...args) {
//     this.talla = talla;
//     this.ppp = ppp;
//     this.leismaniosico = leismaniosico;
//     super(...args); }}

// class Gato extends Animales {
//     constructor(agresividad, pelaje, urinarios, ...args) {
//     this.agresividad = agresividad;
//     this.pelaje = pelaje;
//     this.urinarios = urinarios;
//     super(...args); }}

// // const pumuki = new Perro( "XL", false, false, "labrador", ["14 dic", "2 mayo"],
// "Pumuki", "Paco", true, ["rabia", "leismaniosis", "gripe"],
//  ["mordisco", "diarrea", "ingestion de proyecto node"];

// // 1. IMPORTACIONES
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const animalRouter = require("./api/animales/animales.router");
// const userRouter = require("./api/user/user.router");
// const { connectMongo } = require("./util/db");
// const {
//   notFoundHandler,
//   errorHandler,
//   } = require("./api/middleware/error.middleware");

// // 2. CONFIG

// const whitelist = [
//   "https://lawebdeandres.com",
//   "https://lapaginadeluis.es",
//   "0.0.0.0/0",
// ];

// const PORT = process.env.PORT || 3000;

// const app = express();
// //app.use(cors(whitelist));   // cuando tengamos que permitir acceso a dominios/ips concretas
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // utilizar el protocolo de codificacion de urls
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// connectMongo();

// // 3. ENDPOINTSgetAnimal

// app.get("/", (req, res) => {
//   res.json({
//     status: 200,
//     message: "has hecho un get",
//   });
// });

// app.use("/animales", animalRouter);
// app.use("/user",userRouter);

// app.use(notFoundHandler)
// app.use(errorHandler)

// // 5. LISTEN
// app.listen(PORT, () => {
//   console.log("Servidor iniciado en puerto: " + PORT);
// });

const express = require("express");
const axios = require("axios");
const provinciaToCode = require("./in");
console.log(provinciaToCode);
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

// Ruta para obtener los datos meteorológicos de una provincia específica
app.get("/clima/:provincia", async (req, res, next) => {
  const provincia = provinciaToCode[req.params.provincia.toLowerCase()];
  await axios
    .get("https://www.el-tiempo.net/api/json/v2/provincias/" + provincia)
    .then((response) =>
      res.json({ status: 200, message: response.data.today.p })
    )
    .catch((error) => next(error));
});
  
    (error) => {
    console.error("Error al obtener los datos de la provincia:", error);
    res
      .status(500)
      .json({ error: "Error al obtener los datos de la provincia" });
  }
;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log("Servidor en ejecución en: " + PORT);
});
