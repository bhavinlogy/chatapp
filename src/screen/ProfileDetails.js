const ProfileDetails = (props) => {
    const { DrawerClose, showProfileOverlay, closeProfileDrawer,setProfileOverlay} = props;

    return(
        <div className={`profileDetails ${DrawerClose ? 'closeProfileDrawer' : ''}`}>
          <header className='profileHeader'>
            <div className='flex align-center profheaderflex animateit'>
                <div className='backButton'>
                  <button className="back-button btn" onClick={() => closeProfileDrawer('left')}>
                    <i className="fas fa-arrow-left"></i>
                  </button>
                </div>
                <div className='title-profile'>
                    <h3>Profile</h3>
                </div>
            </div>
          </header>
          <div className='profile-details-sec flex'>
            <div className='profile-photo-sec'>
              <div className='photo-picker-container'>
                <div className='picker-round-shape' onMouseEnter={() => setProfileOverlay(true)} onMouseLeave={() => setProfileOverlay(false)}>
                  <div className='profile-photo' >
                    <img src='https://www.w3schools.com/w3images/avatar2.png'/>
                  </div>
                  <span>
                    {showProfileOverlay && <div className='profile-overlay'>
                      <div className='camera-icon'>
                        <i className='fas fa-camera'></i>
                      </div>
                      <div className='overlay-title'>Change Profile Photo</div>
                    </div>}
                  </span>
                </div>
              </div>
            </div>
            <div className='profile-username-sec'>
              <div className='profile-lable'>
                <span>Your name</span>
              </div>
              <div className='userName'>
                <div className='contenteditable'>
                  Bhavin
                </div>
                <span className='editIcon'>
                  <button className='profile-edit-btn btn'>
                    <i className='fas fa-pen'></i>
                  </button>
                </span>
              </div>
            </div>
            <div className='profile-username-info'>
              <span>This is not your username or pin. This name will be visible to your WebChat contacts.</span>
            </div>
            <div className='profile-username-sec'>
              <div className='profile-lable'>
                <span>About</span>
              </div>
              <div className='userName'>
                <div className='contenteditable'>
                  Made with love, Handcrafted by Bhavin.
                </div>
                <span className='editIcon'>
                  <button className='profile-edit-btn btn'>
                    <i className='fas fa-pen'></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ProfileDetails; 