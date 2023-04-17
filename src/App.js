import React from 'react';
import './App.css';
import "./assets/styles.css";
import chasScreenSvg from './assets/images/chat_screen.svg';
import ChatScreen  from "./screen/ChatScreen";
import UserProfile from './screen/UserProfile';
import ProfileDetails from './screen/ProfileDetails';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {

  const [chats, setChats] = React.useState([
    {
      id: 1,
      name: 'Alice',
      message: 'Hey, how are you doing?',
      image: 'https://www.w3schools.com/w3images/avatar2.png',
      unread: false,
      time: '09:30 PM',
      messages: [
        {
          id: 1,
          text: "Hi there! How's it going one? 1",
          sender: 'me',
          date:'17/01/2023',
          time:'08:30 PM'
        },
        {
          id: 2,
          text: "Hey! I'm doing well, thanks. How about you? 1",
          sender: 'you',
          date:'17/01/2023',
          time:'09:30 PM'
        },
        {
          id: 3,
          text: "What's your plan today? 1",
          sender: 'me',
          date:'18/01/2023',
          time:'09:30 PM'
        },
        {
          id: 4,
          text: "Nothing much special, What about you? 1",
          sender: 'you',
          date:'18/01/2023',
          time:'09:30 PM'
        }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      message: "I'm good, thanks! How about you?",
      image: 'https://www.w3schools.com/w3images/avatar2.png',
      unread: true,
      time: 'Yesterday',
      messages: [
        {
          id: 1,
          text: "Hi there! How's it going two? 2",
          sender: 'me',
          date:'17/01/2023',
          time:'08:30 PM'
        },
        {
          id: 2,
          text: "Hey! I'm doing well, thanks. How about you? 2",
          sender: 'you',
          date:'17/01/2023',
          time:'09:30 PM'
        }
      ]
    },
    {
      id: 3,
      name: 'Claire',
      message: "I'm doing well, thanks! How was your weekend?",
      image: 'https://www.w3schools.com/w3images/avatar2.png',
      unread: false,
      time: 'Yesterday',
      messages: [
        {
          id: 1,
          text: "Hi there! How's it going three? 3",
          sender: 'me',
          date:'17/01/2023',
          time:'08:30 PM'
        },
        {
          id: 2,
          text: "Hey! I'm doing well, thanks. How about you? 3",
          sender: 'you',
          date:'17/01/2023',
          time:'09:30 PM'
        }
      ]
    }
  ]);

  const [showOptionsShow, setShowOptionsShow] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showProfileOverlay, setProfileOverlay] = React.useState(false);
  const [DrawerClose, setDrawerClose] = React.useState(false);
  const [selectedchat, setSelectedChat] = React.useState([]);
  const [viewUserProfile, setViewUserProfile] = React.useState(false);
  const [animateRightDrawer, setAnimateRightDrawer] = React.useState(false);

  const handleSelectChat = (chat) => {
    setSelectedChat([]);
    setSelectedChat(chat);
    setViewUserProfile(false);
  };

  const toggleOptionsShow = () => {
    setShowOptionsShow(!showOptionsShow);
  };

  React.useEffect(() => {

    console.log("start");

    socket.emit("join_room", "whatsapp")

    const hideOptions = (event) => {
      if (!event.target.closest('.options-button')) {
        setShowOptionsShow(false);
      }
    };

    document.addEventListener('click', hideOptions);

    return () => {
      document.removeEventListener('click', hideOptions);
    };

  }, [showOptionsShow]);

  const closeProfileDrawer = (side) => {
    if(side === 'left'){
      setDrawerClose(true);
      setTimeout(() => {
        setShowProfile(false);
        setDrawerClose(false);
      }, 500);
    }
    
    if(side === 'right'){
      setAnimateRightDrawer(true);
      setTimeout(() => {
        setAnimateRightDrawer(false)
        setViewUserProfile(false);
      }, 300);
    }

    if(side === 'rightopen'){
      setAnimateRightDrawer(true);
      setTimeout(() => {
        setAnimateRightDrawer(false);
        setViewUserProfile(true)
      }, 300);
      
    }
  }

  return(
    <div className={`chat-list ${viewUserProfile ? 'three': 'two'}`}>
      <div className="chats">
        {showProfile && <ProfileDetails DrawerClose={DrawerClose} showProfileOverlay={showProfileOverlay} closeProfileDrawer={closeProfileDrawer} setProfileOverlay={setProfileOverlay}/>}
        <div className="chat-left-header">
          <div className='profile-pic' onClick={()=>setShowProfile(true)}>
            <img src='https://www.w3schools.com/w3images/avatar2.png' />
          </div>
          <div className='chat-own-options'>
            <button className="options-button" onClick={() => alert('new chat')}>
              <i className="fas fa-message"></i>
            </button>
            <button className="options-button" onClick={toggleOptionsShow}>
              <i className="fas fa-ellipsis-v"></i>
            </button>
            <div className={showOptionsShow ? 'open options-dropdown' : 'options-dropdown'}>
              <ul>
                <li className={showOptionsShow ? 'show' : ''}>Settings</li>
                <li className={showOptionsShow ? 'show' : ''}>Logout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="conv-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat ${selectedchat.id === chat.id ? 'selected' : ''}`}
              onClick={() => handleSelectChat(chat)}
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
      </div>
      {selectedchat.id > 0 ? (
        <ChatScreen socket={socket} chat={selectedchat} onClose={() => selectedchat([])} openUserProfile={() =>  setViewUserProfile(true)} aniamteDrawer={animateRightDrawer}/>
      ): 
        <div className='empty-chatscreen'>
          <div className='center-contents'>
            <img src={chasScreenSvg}/>
            <div className='title-head'>
              <h1>Chat Web</h1>
              <p>Send & recieve message without keeping your phone online.</p>
              <p>Use chat web app seamlessly.</p>
            </div>
          </div>
        </div>
      }
      <div className={`drawer-right ${viewUserProfile ? 'open': ''}`}>
        <span className='user-info user-profile'>
          {viewUserProfile && 
            <UserProfile chat={selectedchat} onClose={() => closeProfileDrawer('right')} aniamteDrawer={false}/>
          }
        </span>
      </div>
    </div>
  )
}

export default App;
