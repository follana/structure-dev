import {Link} from "react-router-dom";
import React from "react";



function Header(){
    return <nav>
        <Link to = "/"><button class="linky">Accueil</button></Link>
        <Link to = "/calcul-calorique"><button class="linky">Balance</button></Link>
        <Link to ="/clock"><button class="linky">Horloge</button></Link>
        <Link to ="/Kanban"><button class="linky">Kaban</button></Link>
        <Link to ="/logout"><button class="linky">Deconnexion</button></Link>


    </nav>
}

export default Header;