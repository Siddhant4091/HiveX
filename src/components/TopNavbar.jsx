function TopNavbar() {
  return (
    <div className="top-navbar">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-wrapper">
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path d="M6.3833 13.376C7.76953 13.376 9.04785 12.9277 10.0938 12.1807L14.0283 16.1152C14.2109 16.2979 14.4517 16.3892 14.709 16.3892C15.2485 16.3892 15.6304 15.9741 15.6304 15.4429C15.6304 15.1938 15.5474 14.9531 15.3647 14.7788L11.4551 10.8608C12.2769 9.78174 12.7666 8.44531 12.7666 6.99268C12.7666 3.48145 9.89453 0.609375 6.3833 0.609375C2.88037 0.609375 0 3.47314 0 6.99268C0 10.5039 2.87207 13.376 6.3833 13.376ZM6.3833 11.998C3.64404 11.998 1.37793 9.73193 1.37793 6.99268C1.37793 4.25342 3.64404 1.9873 6.3833 1.9873C9.12256 1.9873 11.3887 4.25342 11.3887 6.99268C11.3887 9.73193 9.12256 11.998 6.3833 11.998Z" fill="#3C3C43" fillOpacity="0.6"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <span className="search-shortcut">ctrl+s</span>
        </div>
      </div>

      {/* Right Side Notification */}
      <div className="right-actions">
        <div className="notification-bell">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C8.89543 2 8 2.89543 8 4V4.29C5.89262 4.86229 4.5 6.86103 4.5 9.2V14.5L3 16H17L15.5 14.5V9.2C15.5 6.86103 14.1074 4.86229 12 4.29V4C12 2.89543 11.1046 2 10 2Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 16C7 17.1046 7.89543 18 9 18H11C12.1046 18 13 17.1046 13 16" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="notification-dot"></div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
