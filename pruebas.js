// const express = require('express')
// const app = express()

// app.get("/restar/:num1/:num2", (req, res) => {
//   const num1 = parseInt(req.params.num1);
//   const num2 = parseInt(req.params.num2);
//   const resta = num1 - num2;
  
// res.send (`La resta es: ${resta}`);
// });

// app.get("/sumar/:num1/:num2", (req,res) => {
//   const num1 = parseInt(req.params.num1);
//   const num2 = parseInt(req.params.num2);
//   const suma = num1 + num2;

// res.send (`la suma es: ${suma}`);
// });

// app.get("/multiplicar/:num1/:num2", (req, res) => {
//   const num1 = parseInt(req.params.num1);
//   const num2 = parseInt(req.params.num2);
//   const multiplica = num1 * num2;

// res.send (`la multiplicación es: ${multiplica}`);

// });

// app.get("/dividir/:num1/:num2", (req, res) => {
//   const num1 = parseInt(req.params.num1);
//   const num2 = parseInt(req.params.num2);
//   const dividir = num1 / num2;

//   res.send (`la division es: ${dividir}`);
// });



// app.listen(3000);


const express = require('express')
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
      status: 200,
      message: "has hecho un get",
    });
  });
  
  app.listen(3000);