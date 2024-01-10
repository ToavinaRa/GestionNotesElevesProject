const eleve = require('../models/eleve')

exports.ajout = (req,res) => {
    const newEleve = new eleve ({
        nom:req.body.nom,
        prenom:req.body.prenom,
        date_de_naissance:req.body.date_de_naissance,
        niveau:req.body.niveau,
        filiere:req.body.filiere
    })
    newEleve.save()
        .then ((data) => res.status(200).json({data}))
        .catch ((err) => res.status(401).json({err}))
}