const express=require ('express');
const path=require('path');

const app=express();
app.use(express.static('public'));


app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath);
} )

app.get('/datoHistorico', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/datoHistorico.html');
    res.sendFile(htmlPath);
} )

app.get('/maquinasR', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/maquinasR.html');
    res.sendFile(htmlPath);
} )
app.get('/cicloideal', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/cicloideal.html');
    res.sendFile(htmlPath);
} )

app.get('/cicloreal', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/cicloreal.html');
    res.sendFile(htmlPath);
} )

app.get('/datohistorico2', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/datohistorico2.html');
    res.sendFile(htmlPath);
} )
app.listen(process.env.PORT || 3000,function() {
    console.log('Servidor corriendo en el puerto 3000');
})