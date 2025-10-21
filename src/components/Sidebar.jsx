import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/hiveX_logo.png'
import logoMin from '../assets/logo_min.png'
import drawerIcon from '../assets/Drawer_icon.png'

function Sidebar({ isCollapsed, setIsCollapsed }) {
  const [expandedItems, setExpandedItems] = useState({})
  const [showProfilePopup, setShowProfilePopup] = useState(false)
  
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  
  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/AIAgents', label: 'AI Agents' },
  ]

  const expandableItems = [
    {
      id: 'Tools/Resources',
      label: 'Tools/Resources',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="7" height="7" rx="1" stroke="#696E71" strokeWidth="1.5"/>
          <rect x="11" y="2" width="7" height="7" rx="1" stroke="#696E71" strokeWidth="1.5"/>
          <rect x="2" y="11" width="7" height="7" rx="1" stroke="#696E71" strokeWidth="1.5"/>
          <rect x="11" y="11" width="7" height="7" rx="1" fill="#FF6138" stroke="#FF6138" strokeWidth="1.5"/>
        </svg>
      ),
      children: [
        { path: '/native-apps', label: 'Native Applications' },
        { path: '/third-party-apps', label: '3rd Party Applications' }
      ]
    }
  ]

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup)
  }

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="header">
        <div className="logo-container">
          <img src={isCollapsed ? logoMin : logo} alt="HiveX Logo" className="logo" />
          {!isCollapsed && (
            <img 
              src={drawerIcon} 
              alt="Drawer" 
              className="drawer-icon" 
              onClick={toggleCollapse}
            />
          )}
        </div>
      </div>

      

      {/* Navigation Items */}
      <nav className="navigation">
      <div className="header-divider"></div>
      {isCollapsed && (
        <img 
          src={drawerIcon} 
          alt="Drawer" 
          className="drawer-icon-collapsed" 
          onClick={toggleCollapse}
        />
      )}
        <p className='navigation-category'>General</p>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <div className="nav-icon">
                  {/* Using different icons for each nav item */}
                  {index === 0 && <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_1812_27587)">
                      <path d="M6.23996 5.67677H1.5186C0.911144 5.67677 0.416992 5.18262 0.416992 4.57505V1.74224C0.416992 1.13478 0.911144 0.640625 1.5186 0.640625H6.23996C6.84753 0.640625 7.34168 1.13478 7.34168 1.74224V4.57505C7.34168 5.18262 6.84753 5.67677 6.23996 5.67677ZM1.5186 1.5849C1.43181 1.5849 1.36126 1.65544 1.36126 1.74224V4.57505C1.36126 4.66196 1.43181 4.7325 1.5186 4.7325H6.23996C6.32687 4.7325 6.39741 4.66196 6.39741 4.57505V1.74224C6.39741 1.65544 6.32687 1.5849 6.23996 1.5849H1.5186Z" fill="#696E71" />
                      <path d="M6.23996 15.7507H1.5186C0.911144 15.7507 0.416992 15.2566 0.416992 14.6491V8.03923C0.416992 7.43165 0.911144 6.9375 1.5186 6.9375H6.23996C6.84753 6.9375 7.34168 7.43165 7.34168 8.03923V14.6491C7.34168 15.2566 6.84753 15.7507 6.23996 15.7507ZM1.5186 7.88177C1.43181 7.88177 1.36126 7.95231 1.36126 8.03923V14.6491C1.36126 14.7359 1.43181 14.8065 1.5186 14.8065H6.23996C6.32687 14.8065 6.39741 14.7359 6.39741 14.6491V8.03923C6.39741 7.95231 6.32687 7.88177 6.23996 7.88177H1.5186Z" fill="#696E71" />
                      <path d="M14.4237 15.7471H9.70231C9.09474 15.7471 8.60059 15.2529 8.60059 14.6455V11.8127C8.60059 11.2051 9.09474 10.7109 9.70231 10.7109H14.4237C15.0311 10.7109 15.5253 11.2051 15.5253 11.8127V14.6455C15.5253 15.2529 15.0311 15.7471 14.4237 15.7471ZM9.70231 11.6552C9.6154 11.6552 9.54486 11.7258 9.54486 11.8127V14.6455C9.54486 14.7323 9.6154 14.8028 9.70231 14.8028H14.4237C14.5105 14.8028 14.581 14.7323 14.581 14.6455V11.8127C14.581 11.7258 14.5105 11.6552 14.4237 11.6552H9.70231Z" fill="#696E71" />
                      <path d="M14.4237 9.45386H9.70231C9.09474 9.45386 8.60059 8.95971 8.60059 8.35213V1.74224C8.60059 1.13478 9.09474 0.640625 9.70231 0.640625H14.4237C15.0311 0.640625 15.5253 1.13478 15.5253 1.74224V8.35213C15.5253 8.95971 15.0311 9.45386 14.4237 9.45386ZM9.70231 1.5849C9.6154 1.5849 9.54486 1.65544 9.54486 1.74224V8.35213C9.54486 8.43904 9.6154 8.50959 9.70231 8.50959H14.4237C14.5105 8.50959 14.581 8.43904 14.581 8.35213V1.74224C14.581 1.65544 14.5105 1.5849 14.4237 1.5849H9.70231Z" fill="#696E71" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1812_27587">
                        <rect width="15.1083" height="15.1083" fill="white" transform="translate(0.416992 0.640625)" />
                      </clipPath>
                    </defs>
                  </svg></span>}
                  {index === 1 && <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <g clip-path="url(#clip0_1812_27596)">
                      <path d="M11.0119 7.49219C10.2165 7.49219 9.56934 8.13934 9.56934 8.93471C9.56934 9.73018 10.2165 10.3773 11.0119 10.3773C11.8072 10.3773 12.4544 9.73018 12.4544 8.93471C12.4544 8.13934 11.8072 7.49219 11.0119 7.49219ZM11.0119 9.5667C10.6634 9.5667 10.3799 9.28321 10.3799 8.93469C10.3799 8.58629 10.6633 8.30278 11.0119 8.30278C11.3604 8.30278 11.6438 8.58627 11.6438 8.93469C11.6437 9.28321 11.3604 9.5667 11.0119 9.5667Z" fill="#696E71" />
                      <path d="M6.56752 7.49219C5.77215 7.49219 5.125 8.13934 5.125 8.93471C5.125 9.73018 5.77215 10.3773 6.56752 10.3773C7.36289 10.3773 8.01004 9.73018 8.01004 8.93471C8.01004 8.13934 7.36289 7.49219 6.56752 7.49219ZM6.56752 9.5667C6.21902 9.5667 5.93561 9.28321 5.93561 8.93469C5.93561 8.58629 6.219 8.30278 6.56752 8.30278C6.91602 8.30278 7.19943 8.58627 7.19943 8.93469C7.19943 9.28321 6.91604 9.5667 6.56752 9.5667Z" fill="#696E71" />
                      <path d="M15.5344 7.60044H15.1992V6.22146C15.1992 5.29894 14.4487 4.54838 13.5261 4.54838H9.40379V3.61394C10.0299 3.43675 10.4905 2.86143 10.4905 2.17939C10.4905 1.3568 9.82117 0.6875 8.99849 0.6875C8.1758 0.6875 7.5065 1.3568 7.5065 2.17939C7.5065 2.86145 7.96709 3.43675 8.59318 3.61394V4.54838H4.47086C3.54825 4.54838 2.79779 5.29892 2.79779 6.22146V7.60044H2.46254C1.56406 7.60044 0.833008 8.33139 0.833008 9.22987V11.083C0.833008 11.9814 1.56406 12.7124 2.46254 12.7124H2.79779V14.0913C2.79779 15.0139 3.54823 15.7644 4.47086 15.7644H13.5261C14.4487 15.7644 15.1992 15.0139 15.1992 14.0913V12.7124H15.5344C16.4329 12.7124 17.164 11.9814 17.164 11.083V9.22987C17.164 8.33139 16.4329 7.60044 15.5344 7.60044ZM8.31711 2.17939C8.31711 1.80377 8.62287 1.49811 8.99849 1.49811C9.3741 1.49811 9.67987 1.80377 9.67987 2.17939C9.67987 2.55511 9.3741 2.86077 8.99849 2.86077C8.62287 2.86077 8.31711 2.55511 8.31711 2.17939ZM2.46254 11.9018C2.01093 11.9018 1.64362 11.5345 1.64362 11.083V9.22989C1.64362 8.77838 2.01093 8.41107 2.46254 8.41107H2.79779V11.9018L2.46254 11.9018ZM14.3886 14.0914C14.3886 14.5669 14.0017 14.9538 13.5261 14.9538H4.47086C3.9953 14.9538 3.6084 14.5669 3.6084 14.0914V12.3071V8.00575V6.22146C3.6084 5.74589 3.9953 5.35899 4.47086 5.35899H13.5261C14.0017 5.35899 14.3886 5.74589 14.3886 6.22146V8.00575V12.3071V14.0914ZM16.3534 11.083C16.3534 11.5345 15.986 11.9018 15.5344 11.9018H15.1992V8.41105H15.5344C15.986 8.41105 16.3534 8.77836 16.3534 9.22987V11.083Z" fill="#696E71" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1812_27596">
                        <rect width="16.3333" height="16.3333" fill="white" transform="translate(0.833008 0.0546875)" />
                      </clipPath>
                    </defs>
                  </svg></span>}
                </div>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
         <div className='quick-links-divider'></div>
         <p className='navigation-category'>Quick Links</p>
         
         {/* Expandable Navigation Items */}
         <div className="expandable-nav">
           {expandableItems.map((item) => (
             <div key={item.id} className="expandable-item">
               <button 
                 className="expandable-parent"
                 onClick={() => toggleExpanded(item.id)}
               >
                 <div className="parent-icon">
                   {item.icon}
                 </div>
                 <span className="parent-label">{item.label}</span>
                 <span className={`expand-arrow ${expandedItems[item.id] ? 'expanded' : ''}`}>
                   ▼
                 </span>
               </button>
               
               {expandedItems[item.id] && (
                 <div className="child-items">
                   <div className="connection-line"></div>
                   {item.children.map((child, childIndex) => (
                     <NavLink
                       key={child.path}
                       to={child.path}
                       className={({ isActive }) => `child-item ${isActive ? 'active' : ''}`}
                     >
                       <span className="child-label">{child.label}</span>
                       {childIndex === item.children.length - 1 && (
                         <span className="more-options">⋯</span>
                       )}
                     </NavLink>
                   ))}
                 </div>
               )}
             </div>
           ))}
         </div>
      </nav>

      {/* User Profile Section */}
      <div className="profile-section">
        {showProfilePopup && (
          <div className="profile-popup">
            <div className="popup-header">
              <div className="avatar">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
              <div className="user-info">
                <p className="user-name">Aditya Jadhav</p>
                <p className="user-email">ajadhav01@trupers</p>
              </div>
            </div>
            <div className="popup-divider"></div>
            <div className="popup-menu">
              <div className="menu-item">
                <div className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#696E71"/>
                    <path d="M8 10C5.79086 10 0 11.7909 0 14V16H16V14C16 11.7909 10.2091 10 8 10Z" fill="#696E71"/>
                  </svg>
                </div>
                <span className="menu-text">Invite Members</span>
              </div>
              <NavLink to="/settings" className="menu-item">
                <div className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" fill="#696E71"/>
                    <path d="M8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8Z" fill="#696E71"/>
                    <path d="M14.5 8.5L13.5 9.5L12.5 8.5L11.5 9.5L10.5 8.5L9.5 9.5L8.5 8.5L7.5 9.5L6.5 8.5L5.5 9.5L4.5 8.5L3.5 9.5L2.5 8.5L1.5 9.5L0.5 8.5V12.5L1.5 13.5L2.5 12.5L3.5 13.5L4.5 12.5L5.5 13.5L6.5 12.5L7.5 13.5L8.5 12.5L9.5 13.5L10.5 12.5L11.5 13.5L12.5 12.5L13.5 13.5L14.5 12.5V8.5Z" fill="#696E71"/>
                  </svg>
                </div>
                <span className="menu-text">Settings</span>
              </NavLink>
              <div className="menu-item">
                <div className="menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="#696E71"/>
                    <path d="M8 4C7.44772 4 7 4.44772 7 5V7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7V5C9 4.44772 8.55228 4 8 4Z" fill="#696E71"/>
                    <path d="M8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10Z" fill="#696E71"/>
                  </svg>
                </div>
                <span className="menu-text">Submit Feedback</span>
              </div>
            </div>
            <div className="popup-divider"></div>
            <div className="menu-item logout">
              <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H6C6.55228 14 7 13.5523 7 13V11H5V13H4V3H6V5H7V3C7 2.44772 6.55228 2 6 2Z" fill="#696E71"/>
                  <path d="M12.7071 6.29289L15.4142 9L12.7071 11.7071L12 11L13.5858 9.41421H8V8.58579H13.5858L12 7L12.7071 6.29289Z" fill="#696E71"/>
                </svg>
              </div>
              <span className="menu-text">Logout</span>
            </div>
          </div>
        )}
        
        <div className="profile-container" onClick={toggleProfilePopup}>
          <div className="avatar">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="user-info">
            <p className="user-name">Aditya Jadhav</p>
            <p className="user-email">ajadhav01@trupers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
