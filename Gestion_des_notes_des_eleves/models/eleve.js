const mongoose = require('mongoose')

const eleveSchema = mongoose.Schema({
    nom: {type:String, require:true},
    prenom: {type:String, require:true},
    date_de_naissance: {type:String, require:true},
    matiere: {type:Array, require:false},
    note: {type:Array, require:false},
    coefficient: {type:Number, require:false},
    professeur: {type:Array, require:false},
    niveau: {type:String, require:true},
    filiere: {type: String, require:true},
    moyenne: {type:Number, require:false}
})
module.exports = mongoose.model('eleve', eleveSchema)