/*
-------------------------------------------------------------------------
NOME..: app.js
LANG..: nodeJS
TITULO: Modulo que estarta o programa front-end site da Landin page
DATA..: 15/05/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
15/05/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const express = require('express');
const path = require('path')
const app = express()

//teste

const indexRouter = require('./routes/index')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public'))) 
app.set('view engine', 'ejs')

app.use('/home', indexRouter)

app.listen(Number(process.env.PORT) || 3001, '0.0.0.0', () => {
    console.log('Servidor rodando na porta 3001');
  });
  
module.exports = app