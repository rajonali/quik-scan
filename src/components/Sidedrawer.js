import React from 'react'
import '../css/sidedrawer.css'
import Navigation from './Navigation';
import Backdrop from './Backdrop';
function Sidedrawer({show, onClick}) {
return (

show ? (
    <nav style={{background:'rgba(0,0,0,0.8)' , margin:'0px !important'}} className="side-drawer">
                    <Navigation show={show} onClickHandler={onClick} vertical={true}/>
                    
                </nav>
    ):(<div></div>)
)
}

export default Sidedrawer
