const UserProfile = (props) =>{
    const {chat,onClose,aniamteDrawer} = props;
    return (
        <div className={`openUserProfile flex width-100 position-absolute overflow-hidden height-100 flex-direction-column ${aniamteDrawer ? 'closeRightDrawer': ''}`}>
            <header className="userProfileHeader">
                <div className="title animate-title">
                    <div className="closeButtonContainer">
                        <button className="close-button btn" onClick={() => onClose()}>
                            <i className="fas fa-close"></i>
                        </button>
                    </div>
                </div>
                <div className='title-profile'>
                    <h3>Contact Info</h3>
                </div>
            </header>
            <div className='profile-details-sec flex'>
                <div className='profile-photo-sec section-bg pl-30 pr-30 boxshadow animate-box position-relative mb-10'>
                    <div className='photo-picker-container'>
                        <div className='picker-round-shape'>
                            <div className='profile-photo' >
                                <img src='https://www.w3schools.com/w3images/avatar2.png'/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="userName">
                        <h2>
                            <span>{chat.name}</span>
                        </h2>
                    </div>
                    <div className="contactInfo">
                        <span>+91 8855226644</span>
                    </div>
                </div>
                <div className="media-share section-bg pl-30 pr-30 pt-17 boxshadow animate-box position-relative mb-10 pb-10">
                    <div className="section-media" role="button">
                        <div className="flex align-center">
                            <div className="media-lable">
                                <span>Media, links and docs</span>
                            </div>
                            <div className="media-counts-with-arrow flex align-center">
                                <div className="media-count primary-white-text">15</div>
                                <div className="button-icon-to-media primary-white-text">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media-gallery flex align-center flex-wrap justify-center flex-direction-row">
                        <div className="gallery-box position-relative">
                            <div className="overlay-gradiant position-absolute"></div>
                            <div className="inner-container position-absolute height-100 flex width-100 align-center justify-center">
                                <div className="media-state-download position-absolute height-100 flex width-100 align-center justify-center">
                                    <button className="download-media-btn border-radius-50 flex align-center position-relative justify-center">
                                        <i className="fas fa-arrow-down"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="padding-top-90"></div>
                        </div>
                        <div className="gallery-box position-relative"></div>
                        <div className="gallery-box position-relative"></div>
                        <div className="gallery-box position-relative"></div>
                        <div className="gallery-box position-relative"></div>
                    </div>
                </div>
                <div className="pl-30 pr-30 section-bg animate-box other-option boxshadow position-relative">
                    <div className="block-starred-message">
                        <div className="flex align-center">
                            <div className="overflow-hidden container flex-grow white-space-normal flex-shrink flex-basis-auto text-ellipsis">
                                <div className="flex flex-direction-row align-center justify-start align-center">
                                    <div className="icon-star-message primary-white-text flex-grow-0 flex-direction-row flex flex-shrink-0 align-center justify-center">
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="lable primary-strong flex-grow flex-shrink-1">
                                        <span>Starred message</span>
                                    </div>
                                    <div className="button-icon-to-starredmessage primary-white-text flex-grow-0 flex-direction-row flex flex-shrink-0 justify-end align-center">
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-30 pr-30 section-bg animate-box position-relative">
                    <div className="container-with-seperator pl-30">
                        <div className="pr-30 seperator-div flex align-center">
                            <div className="overflow-hidden flex-shrink text-ellipsis white-space-nowrap flex-basis-auto flex-grow">
                                <span className="saperator-text primary-white-text">Archived chats are muted</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-box section-bg position-relative block-user-section">
                    <div role="button" tabIndex={0} className="block-container position-relative flex align-center">
                        <div className="btn-container color-danger flex justify-center font-size-19">
                            <i className="fas fa-ban"></i>
                        </div>
                        <div className="lable color-danger font-size-20 pr-30 flex flex-grow flex-shrink flex-basis-auto align-center overflow-hidden">
                            Block Bob
                        </div>
                    </div>
                    <div role="button" tabIndex={0} className="block-container position-relative flex align-center">
                        <div className="btn-container color-danger flex justify-center font-size-19">
                            <i className="fas fa-thumbs-down"></i>
                        </div>
                        <div className="lable color-danger font-size-20 pr-30 flex flex-grow flex-shrink flex-basis-auto align-center overflow-hidden">
                            Report Bob
                        </div>
                    </div>
                    <div role="button" tabIndex={0} className="block-container position-relative flex align-center">
                        <div className="btn-container color-danger flex justify-center font-size-19">
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className="lable color-danger font-size-20 pr-30 flex flex-grow flex-shrink flex-basis-auto align-center overflow-hidden">
                            Delete Chat
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default UserProfile;