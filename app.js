const express = require("express");
const app = express();

const validationRoute = require("./src/routes/validationRoute")

app.set('view engine', 'pug')
app.set('views', './views');
app.use(express.json());

app.use('/api/validate', validationRoute);

app.get('/', (req,res)=>{
  res.render('index');
})


try {
  app.listen(3000, ()=>{
    console.log("server running")
  })  
} catch (error) {
  console.log(error);  
}
