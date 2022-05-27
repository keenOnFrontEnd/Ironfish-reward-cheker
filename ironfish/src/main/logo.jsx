import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from '../css/main.css'

const LogoComponent = (props) => {

    return <div className="userContainer logo">
        This page can calculate your current $IRON testnet V2 reward <br/><br/><br/>
        Note, this page currently only works on the desktop and the results may differ from your own calculations.
        <span>
            <a href="https://github.com/keenOnFrontEnd"><FontAwesomeIcon icon={faGithub} size="2x" color="black"/></a>
            <a href="https://github.com/mishutka200101"><FontAwesomeIcon icon={faGithub} size="2x" color="black"/></a>
        </span>
    </div>
}

export default LogoComponent