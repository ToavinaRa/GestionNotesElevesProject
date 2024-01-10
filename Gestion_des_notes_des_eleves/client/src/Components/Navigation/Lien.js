import React from "react"
import {Link} from "react-router-dom"
import './Lien.css'

const Lien = () => {
    return (
        <div className="navigation">
            <nav>
                <Link to="/"> Accueil </Link>
                <Link to="/informatique"> Informatique </Link>
                <Link to="/gestion"> Gestion </Link>
                <Link to="/commerce" > Commerce </Link>
                <Link to="/ajout_eleve" > Ajouter un nouveau élève </Link>
            </nav>
        </div>
    )
}

export default Lien