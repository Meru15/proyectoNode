// const express = require("express");
// const {
//   createAnimal,
//   getAnimal,
//   updateAnimal,
//   deleteAnimal,
// } = require("./animales.controller");
// const animalRouter = express.Router();

// animalRouter.get("/:id", getAnimal);
// animalRouter.post("/", createAnimal);
// animalRouter.patch("/:id", updateAnimal);
// animalRouter.delete("/:id", deleteAnimal);

// module.exports = animalRouter;


// En el archivo router.js
const express = require('express');
const { obtenerDatosProvincia } = require('./controller');

const router = express.Router();

router.get('/clima/:provincia', async (req, res) => {
  const provincia = req.params.provincia;
  try {
    const datosProvincia = await obtenerDatosProvincia(provincia);
    if (datosProvincia) {
      res.json(datosProvincia);
    } else {
      res.status(404).json({ error: 'Provincia no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de la provincia' });
  }
});

module.exports = router;
