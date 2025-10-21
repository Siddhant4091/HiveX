import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import ChatWindow from './ChatWindow'

function Layout({ children }) {
  const location = useLocation()
  const isSettingsPage = location.pathname === '/settings'
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(true)

  const handleCloseChat = () => {
    setIsChatOpen(false)
  }

  return (
    <div className={`layout ${isSettingsPage ? 'settings-layout' : ''} ${isCollapsed ? 'sidebar-collapsed' : ''} ${!isChatOpen ? 'chat-closed' : ''}`}>
      {/* Left Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Top Navbar - spans across main content and chat */}
      <TopNavbar />

      {/* Main Content Area */}
      <main className={`content-area ${isSettingsPage ? 'settings-content' : ''}`}>
        {children}
      </main>

      {/* Right Chat Window - hidden on settings page or when closed */}
      {!isSettingsPage && isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </div>
  )
}

export default Layout
