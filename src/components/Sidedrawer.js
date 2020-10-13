import React from 'react'
import '../css/sidedrawer.css'
import Navigation from './Navigation';

function Sidedrawer({show}) {
return (

show ? (
    <nav className="side-drawer">
                    <Navigation vertical={true}/>
                </nav>
    ):(<div></div>)
)
}

export default Sidedrawer
