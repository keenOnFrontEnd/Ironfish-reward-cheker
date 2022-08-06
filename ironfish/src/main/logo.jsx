import {  faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LogoComponent = () => {

    return <div className="userContainer logo">
        This page can calculate your current $IRON testnet V2 reward <br/><br/><br/>
        Note, this page currently only works on the desktop and the results may differ from your own calculations<br/><br/>
        Please, use the correct case of your moniker
        <span>
            <a href="https://github.com/keenOnFrontEnd"><FontAwesomeIcon icon={faGithub} size="2x" color="black"/></a>
            <a href="https://github.com/mishutka200101"><FontAwesomeIcon icon={faGithub} size="2x" color="black"/></a>
        </span>
    </div>
}

export default LogoComponent