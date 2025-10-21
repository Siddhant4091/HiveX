import nativeAppIcon from '../assets/native_app_icon.png'
function Home() {
  return (
    <div className="home">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-title">
        Hello Aditya, Meet Hivex - Your Modular<br /> Command Center for Everything AI
        </h1>
         <p className="welcome-description">
         Lorem ipsum dolor sit amet consectetur. Semper metus dictum tellus ipsum augue. Ipsum dis pulvinar cras lorem rutrum. Egestas elementum imperdiet viverra quis sed. Diam vulputate id orci euismod nec duis. Semper metus dictum tellus (AI suggestion)
          </p>
          <p className="cta-button">CTA</p>
      </div>
      
      {/* Quick Actions */}
      <div className="published-tools-title">Published Tools</div>
      <div className="quick-actions">
        {/* Native Applications */}
        <div className="action-card">
          <h3 className="native-apps-title">Native Applications</h3>
          <p className="native-apps-description">Published Tools Count</p>
          
          {/* Tool Selection Buttons */}
          <div className="tool-selection">
            <div className="tool-selection-buttons">
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
            </div>
            <button className="tool-btn selected">
              <span className="tool-number">04</span>
            </button>
          </div>
        </div>
        {/* 3rd Party Applications */}
        <div className="action-card">
          <h3 className="native-apps-title">3rd Party Applications</h3>
          <p className="native-apps-description">Published Tools Count</p>
          
          {/* Tool Selection Buttons */}
          <div className="tool-selection">
            <div className="tool-selection-buttons">
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
              <button className="tool-btn">
                <img src={nativeAppIcon} alt="Native App" className="tool-icon" />
              </button>
            </div>
            <button className="tool-btn selected">
              <span className="tool-number">+150</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Launch Agent and Recent Activity Row */}
      <div className="agent-activity-row">
        {/* Quick Launch Agent */}
        <div className="agent-card">
          <div className="card-header">
            <h3 className="card-title">Quick Launch Agent</h3>
            <button className="add-btn">
             Make New Agent
            </button>
          </div>
          
          <div className="agent-list">
            <div className="agent-item">
              <div className="agent-icon blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.5 6H16L11 9.5L12.5 16L8 12L3.5 16L5 9.5L0 6H6.5L8 0Z" fill="white"/>
                </svg>
              </div>
              <span className="agent-label">Agent 1</span>
            </div>
            
            <div className="agent-item">
              <div className="agent-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="white"/>
                  <path d="M8 10C5.79086 10 0 11.7909 0 14V16H16V14C16 11.7909 10.2091 10 8 10Z" fill="white"/>
                </svg>
              </div>
              <span className="agent-label">Agent 2</span>
            </div>
            
            <div className="agent-item">
              <div className="agent-icon purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" fill="white"/>
                  <path d="M8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8Z" fill="white"/>
                  <path d="M14.5 8.5L13.5 9.5L12.5 8.5L11.5 9.5L10.5 8.5L9.5 9.5L8.5 8.5L7.5 9.5L6.5 8.5L5.5 9.5L4.5 8.5L3.5 9.5L2.5 8.5L1.5 9.5L0.5 8.5V12.5L1.5 13.5L2.5 12.5L3.5 13.5L4.5 12.5L5.5 13.5L6.5 12.5L7.5 13.5L8.5 12.5L9.5 13.5L10.5 12.5L11.5 13.5L12.5 12.5L13.5 13.5L14.5 12.5V8.5Z" fill="white"/>
                </svg>
              </div>
              <span className="agent-label">Agent 3</span>
            </div>
            
            <div className="agent-item">
              <div className="agent-icon orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L9.5 5.5H13L10.25 7.75L11.75 11L8 9L4.25 11L5.75 7.75L3 5.5H6.5L8 2Z" fill="white"/>
                </svg>
              </div>
              <span className="agent-label">Agent 4</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <a href="#" className="view-all-link">View All</a>
          </div>
          
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="activity-content">
                <p className="activity-text">You have successfully launched Agent 1</p>
                <span className="activity-time">2 min ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 6L6 2M6 6L10 6M6 6L2 6M6 6L6 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="activity-content">
                <p className="activity-text">Agent 2 has been updated</p>
                <span className="activity-time">1 hr ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M6 4V6L7.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="activity-content">
                <p className="activity-text">Agent 3 configuration completed</p>
                <span className="activity-time">3 hr ago</span>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="activity-icon orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5H11L8.75 6.75L10.25 10L6 8L1.75 10L3.25 6.75L1 4.5H4.5L6 1Z" fill="white"/>
                </svg>
              </div>
              <div className="activity-content">
                <p className="activity-text">New agent template created</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home
