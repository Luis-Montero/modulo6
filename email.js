//contraseña del correo generada: 

//1.- cargamos el nodemailer
var nodemailer=require('nodemailer');
var nodemailer  = require('nodemailer');
require('dotenv').config();

//2.1- configuracion del servidor
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'contactobrokerinmobiliariocl@gmail.com',
        pass : process.env.PASSWORD
    }
});
//2.2.- construir el mensaje de correo
var mailOptions = {
    from : 'contactobrokerinmobiliariocl@gmail.com',
    to : 'luisemontero16@gmail.com',
    subject: 'Saludos de node',
    text: "Primer ejemplo de correo enviado por node"
};
//3.- enviar el correo
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err.message)
    }else{
        console.log(info.response);
    }
})