const express = require('express')
const router = express.Router()

const eleveCtrl = require('../controllers/eleve.controller')

router.post('/ajoutEleve', eleveCtrl.ajout)

module.exports = router