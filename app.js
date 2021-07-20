const express=require ('express');
const path=require('path');

const app=express();
app.use(express.static('public'));


app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath);
} )

app.listen(process.env.PORT || 3000,function() {
    console.log('Servidor corriendo en el puerto 3000');
})