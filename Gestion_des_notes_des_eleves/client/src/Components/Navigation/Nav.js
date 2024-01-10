import NavBar from "./Lien"
import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Ajouter from "../../Pages/ajout_eleve"

const Nav = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/informatique" element={<informatique />} />
                <Route path="/gestion" element={<gestion />} />
                <Route path="/commerce" element={<commerce />} />
                <Route path="/ajout_eleve" element={<Ajouter />} />
            </Routes>
        </Router>
    )
}

export default Nav