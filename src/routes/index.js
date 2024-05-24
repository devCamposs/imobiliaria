/*
-------------------------------------------------------------------------
NOME..: index.js
LANG..: nodeJS
TITULO: Modulo rota index
DATA..: 15/05/2024
-------------------------------------------------------------------------
Copyright (c) 2024 - CTConnect+ - Thomas Campos
-------------------------------------------------------------------------
Modifications.....:
Date          Rev    Author            Description
15/05/2024    0      Thomas Campos     Elaboração
---------------------------------------------------------------------------
*/

const express = require('express')
const router = express.Router()

const indexController = require('../controller/indexController')

router.get('/', indexController.index)

module.exports = router