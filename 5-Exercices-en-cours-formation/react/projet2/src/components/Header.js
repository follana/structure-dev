import {Link} from "react-router-dom";
import React from "react";



function Header(){
    return <nav>
        <Link to = "/"><button className="linky">Accueil</button></Link>
        <Link to = "/calcul-calorique"><button class="linky">Balance</button></Link>
        <Link to ="/clock"><button className="Hour">Horloge</button></Link>
        <Link to ="/logout"><button className="linky">Deconnexion</button></Link>
        <Link to ="/Tableau"><button className="Tableau">Kaban</button></Link>

    </nav>
}

export default Header;