import React,{useState} from "react"
import axios from "axios"

const AjoutEleve = () => {
    const [nomValue,setNomValue] = useState('Entrer votre nom')
    const [prenomValue,setPrenomValue] = useState('Entrer votre prenom')
    const [niveauValue,setNiveauValue] = useState('Votre niveau')
    const [dateDeNaissanceValue,setDateDeNaissanceValue] = useState('Entrer votre date de naissance')
    const [filiereValue,setFiliereValue] = useState('Entrer vore filiere')
    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/eleve/ajoutEleve`, {
            nom:nomValue,
            prenom:prenomValue,
            date_de_naissance:dateDeNaissanceValue,
            niveau:niveauValue,
            filiere:filiereValue
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="nom"
                value={nomValue} 
                onChange = {(e) => setNomValue(e.target.value)}
            />
            <input
                type="text"
                name="prenom"
                value={prenomValue}
                onChange = {(e) => setPrenomValue(e.target.value)}
            />
            <select name="niveau" onChange={(e) => setNiveauValue(e.target.value)}>
                <option value="L1"> L1 </option>
                <option value="L2"> L2 </option>
                <option value="L3"> L3 </option>
                <option value="M1"> M1 </option>
                <option value="M2"> M2 </option>
            </select>
            <input
                type="text"
                name="naissance"
                value={dateDeNaissanceValue}
                onChange= {(e) => setDateDeNaissanceValue(e.target.value)}
            />
            <select name="filiere" onChange={(e) => setFiliereValue(e.target.value)}>
                <option value="informatique"> Informatique </option>
                <option value="gestion"> Gestion </option>
                <option value="commerce"> Commerce </option>
            </select>
            <button type="submit"> Ajouter </button>
            </form>
        </div>
    )
}

export default AjoutEleve