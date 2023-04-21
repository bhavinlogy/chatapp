import React from 'react'

function ChatLists(props) {
  return (
    <div className="conv-list">
        {props.chats.map((chat) => (
        <div
            key={chat.id}
            className={`chat ${props.selectedchat.id === chat.id ? 'selected' : ''}`}
            onClick={() => props.handleSelectChat(chat)}
        >
            <img src={chat.image} alt={chat.name} />
            <div className="chat-info">
            <div className='info-left'>
                <h3>{chat.name}</h3>
                <p>{chat.message}</p>
            </div>
            <div className='info-right'>
                <p>{chat.time}</p>
                {chat.unread && <div className="unread-indicator">1</div>}
            </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ChatLists