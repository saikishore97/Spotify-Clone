import React from 'react';
import './Player.styles.css';
import SideBar from './Sidebar.component';
import Body from './Body.component';
import Footer from './Footer.component';




function PlayerPage({spotify}) {
    return (
        <div className='player'>
            <div className="player__body">
                <SideBar/>
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    );
}

export default PlayerPage;
