import React from 'react'

function ChatLeftHeader(props) {
  return (
    <div className="chat-left-header">
        <div className='profile-pic' onClick={() => props.setShowProfile(true)}>
        <img src='https://www.w3schools.com/w3images/avatar2.png' />
        </div>
        <div className='chat-own-options'>
        <button className="options-button" onClick={() => alert('new chat')}>
            <i className="fas fa-message"></i>
        </button>
        <button className="options-button" onClick={props.toggleOptionsShow}>
            <i className="fas fa-ellipsis-v"></i>
        </button>
        <div className={props.showOptionsShow ? 'open options-dropdown' : 'options-dropdown'}>
            <ul>
            <li className={props.showOptionsShow ? 'show' : ''}>Settings</li>
            <li className={props.showOptionsShow ? 'show' : ''}>Logout</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default ChatLeftHeader