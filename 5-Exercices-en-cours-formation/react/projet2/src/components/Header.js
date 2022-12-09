import {Link} from "react-router-dom";
import React from "react";



function Header(){
    return <nav>
        <Link to = "/"><button>Accueil</button></Link>
        <Link to = "/calcul-calorique"><button>Balance</button></Link>
        <Link to ="/clock"><button>Horloge</button></Link>

    </nav>
}

export default Header;