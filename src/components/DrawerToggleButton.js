import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap';



function DrawerToggleButton({onClick}) {
    return (
        <Button onClick={onClick} variant="dark" className="toggle-button">
            <FontAwesomeIcon icon={faBars}/>
        </Button>
    )
}

export default DrawerToggleButton;
