// const axios = require('axios');

// // URL de la API de El Tiempo
// const apiUrl = 'https://www.el-tiempo.net/api/json/v2/home';

// // Función para obtener los datos del tiempo
// async function obtenerDatosTiempo() {
//   try {
//     // Realizar una solicitud GET a la API de El Tiempo
//     const response = await axios.get(apiUrl);

//     // Imprimir la respuesta completa en la consola
//     console.log('Respuesta completa de la API de El Tiempo:');
//     console.log(response.data);

//     // Devolver los datos del tiempo
//     return response.data;
//   } catch (error) {
//     // Manejar cualquier error que ocurra durante la solicitud
//     console.error('Error al obtener datos del tiempo:', error);
//     throw error;
//   }
// }

// // Llamar a la función para obtener los datos del tiempo
// obtenerDatosTiempo()
//   .then(datosTiempo => {
//     // Aquí puedes realizar más acciones con los datos del tiempo, si es necesario
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


const provinciaToCode = 
{
  alava: "01",
  albacete: "02",
  alicante: "03",
  almeria: "04",
  asturias: "33",
  avila: "05",
  badajoz: "06",
  barcelona: "08",
  burgos: "09",
  caceres: "10",
  cadiz: "11",
  cantabria: "39",
  castellon: "12",
  ciudad_real: "13",
  cordoba: "14",
  cuenca: "16",
  gerona: "17",
  granada: "18",
  guadalajara: "19",
  guipuzcoa: "20",
  huelva: "21",
  huesca: "22",
  islas_baleares: "07",
  jaen: "23",
  la_coruna: "15",
  la_rioja: "27",
  las_palmas: "35",
  leon: "24",
  lerida: "25",
  lugo: "27",
  madrid: "28",
  malaga: "29",
  murcia: "30",
  navarra: "31",
  ourense: "32",
  palencia: "34",
  pontevedra: "36",
  salamanca: "37",
  segovia: "40",
  sevilla: "41",
  soria: "42",
  tarragona: "43",
  tenerife: "38",
  teruel: "44",
  toledo: "45",
  valencia: "46",
  valladolid: "47",
  vizcaya: "48",
  zamora: "49",
  zaragoza: "50",
  ceuta: "51",
  melilla: "52",
};

module.exports = provinciaToCode;



