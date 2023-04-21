import React from 'react'

export default function chatHeader(props) {
  return (
    <div className="chat-header">
        <div className='chat-header-top-left' onClick={props.onClick}>
          <div className="chat-header-left">
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" className="chat-header-image rounded" />
            <div className="chat-header-status">
              <div className="chat-header-name">{props.userName}</div>
              <span className="last-seen">Last seen 2 minutes ago / Online</span>
            </div>
          </div>
          
        </div>
        <div className="chat-header-options">
          <button className="options-button" onClick={props.toggleOptions}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className={props.showOptions ? 'open options-dropdown' : 'options-dropdown'}>
            <ul>
              <li className={props.showOptions ? 'show' : ''}>View profile</li>
              <li className={props.showOptions ? 'show' : ''}>Mute notifications</li>
              <li className={props.showOptions ? 'show' : ''}>Block</li>
            </ul>
          </div>
        </div>
      </div>
  )
}
