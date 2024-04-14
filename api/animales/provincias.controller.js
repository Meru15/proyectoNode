// const Animal = require("./animales.model");

// // CRUD

// // CREATE ---> POST

// const createAnimal = async (req, res) => {
//   try {
//     // con los parametros que me manda el cliente instancio el modelo (+- clase) Animal.
//     const animal = new Animal(req.body);
//     // lo guado en mi base.
//     await animal.save();
//     // le damos una respuesta al cliente de que todo ha ido bien.
//     res.json({
//       status: 201,
//       message: "created",
//       data: animal,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // READ ----> GET

// const getAnimal = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const animal = await Animal.findById(id);
//     res.json({
//       status: 200,
//       message: "ok",
//      data: animal,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // UPDATE ----> PATCH

// const updateAnimal = async (req, res) => {
//   try {
//     const animal = await Animal.findById(id);
//     // busco por id el animal a editar
//     const id = req.params.id;
//     // obtengo los datos que hay que editar del body / payload
//     const body = req.body;
//     // uso la funcion mongo que sirve para editar cosas
//     const updatedAnimal = await Animal.findByIdAndUpdate(id, body, {
//       new: true,
//     });

//     // respondo al cliente
//     res.json({
//       status: 200,
//       message: "updated",
//       data: updatedAnimal,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// // DELETE ----> DELETE

// const deleteAnimal = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const animal = await Animal.findByIdAndDelete(id);
//     res.json({
//       status: 200,
//       message: "deleted",
//       data: animal,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = { createAnimal, getAnimal, updateAnimal, deleteAnimal };





const axios = require('axios');

async function obtenerDatosProvincia(provincia) {
  try {
    const response = await axios.get('https://www.el-tiempo.net/api/json/v2/home');
    const datosProvincia = response.data.localidades.find(localidad => localidad.id.toLowerCase() === provincia.toLowerCase());
    return datosProvincia;
  } catch (error) {
    console.error('Error al obtener los datos de la provincia:', error);
    throw error;
  }
}

module.exports = { obtenerDatosProvincia };

