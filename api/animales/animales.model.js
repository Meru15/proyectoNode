// const mongoose = require("mongoose"); //1. importo mongoose

// //2. Defino el modelo (entidad) animal y le paso los datos que tiene que tener.

// const animalSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   owner: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });

// // 3. Convierto el modelo de MongoDB a un objeto JS que pueda trabajar con el
// const Animal = mongoose.model("Animal", animalSchema);

// // 4. Exporto el modelo para que lo usen otros archivos (controladores)
// module.exports = Animal;