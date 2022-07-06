import React from 'react';
import './Chat.css';
import NavBarMenu from '../NavBarMenu';
import Test from '../../Test';


function Chat(props) {
    return (
        <div>
            <NavBarMenu />
            
        <div className="chat" responsive id="chat">
            <div id="hidden-chat">
           <div id="chat-select">
            <h1 id="chat-h2">Welcome to Ares Security_server</h1>   
            <h2 id="chat-h2">please select option:</h2>   
            <Test/>
           </div>
            </div>
        </div>
        </div>
    );
}

export default Chat;