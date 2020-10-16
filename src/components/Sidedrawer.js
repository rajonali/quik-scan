import React from 'react'
import '../css/sidedrawer.css'
import Navigation from './Navigation';
import Backdrop from './Backdrop';
function Sidedrawer({show, onClick}) {
return (

show ? (
    <nav style={{background:'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(70,29,124,1) 35%, rgba(253,208,35,1) 100%)' , margin:'0px !important'}} className="side-drawer">
                    <Navigation show={show} onClickHandler={onClick} vertical={true}/>
                    
                </nav>
    ):(<div></div>)
)
}

export default Sidedrawer
