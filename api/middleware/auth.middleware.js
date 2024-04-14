// const jwt = require("jsonwebtoken");

// const isAuth = (req, res, next) => {
//   const authorization = req.headers.authorization;
//   const secret = req.app.get("secretKey") || process.env.JWT_SECRET;

//   if (!authorization) {
//     return res.json({
//       status: 401,
//       message: "Unauthorized",
//       data: null,
//     });
//   }

//   const splits = authorization.split(" ");
//   if (splits.length != 2 || splits[0] != "Bearer") {
//     return res.json({
//       status: 400,
//       message: "Bad Request",
//       data: null,
//     });
//   }

//   const jwtString = splits[1];

//   try {
//     var token = jwt.verify(jwtString, secret);
//   } catch (error) {
//     return next(error);
//   }

//   const authority = {
//     id: token.id,
//     name: token.name,
//   };
//   req.authority = authority;
//   next();
// };

// module.exports = {
//   isAuth,
// };

// const axios = require('axios');

// const apiKey = '427b8ceaff31a7e81e339bbc4270f243';
// const apiUrl = 'https://www.el-tiempo.net/api/json/v2/home'; // Reemplaza esto con la URL de la API que estás utilizando

// async function obtenerDatosDeLaAPI() {
//   try {
//     // Realizar una solicitud GET a la API
//     const response = await axios.get(apiUrl, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`
//       }
//     });

//     // Acceder a los datos de la respuesta
//     const datos = response.data;

//     // Hacer algo con los datos...
//     console.log(datos);

//     return datos;
//   } catch (error) {
//     // Manejar cualquier error que ocurra durante la solicitud
//     console.error('Error al obtener datos de la API:', error);
//     throw error;
//   }
// }

// // Llamar a la función para obtener los datos de la API
// obtenerDatosDeLaAPI();





