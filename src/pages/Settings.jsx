import { useState } from 'react'
import smsIcon from "../assets/email_icon.png"

function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'Aditya Jadhav',
    language: 'English',
    country: 'United States',
    phoneNumber: '+1 9988776600'
  })

  const tabs = [
    { id: 'general', label: 'General Settings' },
    { id: 'agents', label: "Agents' Settings" },
    { id: 'users', label: "Users' Settings" },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'security', label: 'Security' }
  ]

  const handleEditSave = () => {
    if (isEditing) {
      // Save mode - just toggle to view mode
      setIsEditing(false)
    } else {
      // Edit mode
      setIsEditing(true)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="settings">
      {/* Settings Header */}
      <div className="settings-header">
        <h1 className="settings-title">System Settings</h1>
        <p className="settings-description">Setup and edit system settings and preferences</p>
      </div>

      {/* Navigation Tabs */}
      <div className="settings-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="settings-content">
        {activeTab === 'general' && (
          <>
            {/* Profile Photo Section */}
            <div className="profile-section">
              <div className="profile-photo-container">
                <div className="profile-photo">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                <div className="photo-actions">
                  <button className="change-photo-btn">Change Photo</button>
                  <a href="#" className="remove-photo-link">Remove</a>
                </div>
              </div>
              <button className="edit-btn" onClick={handleEditSave}>
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>

            {/* User Information Form */}
            <div className="user-info-form">
              <div className="form-row">
                <div className="form-column">
                  <div className="form-field">
                    <label className="field-label">Full Name</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-field">
                    <label className="field-label">Language</label>
                    <div className="select-container">
                      <select 
                        className="field-select"
                        value={formData.language}
                        onChange={(e) => handleInputChange('language', e.target.value)}
                        disabled={!isEditing}
                      >
                        <option value="" disabled>Select Language</option>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                      <svg className="select-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="form-column">
                  <div className="form-field">
                    <label className="field-label">Your Country</label>
                    <div className="select-container">
                      <select 
                        className="field-select"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        disabled={!isEditing}
                      >
                        <option value="" disabled>Select Country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                      </select>
                      <svg className="select-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="field-label">Phone Number</label>
                    <input
                      type="tel"
                      className="field-input"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              {/* Email Address and connected apps - Third Row */}
              <div className="form-row">
                <div className="form-field">
                  <label className="field-label">My email Address</label>
                  <div className="email-field">
                    <div className="email-icon">
                      <img className="email-icon-img" src={smsIcon} alt="Email" width="16" height="16" />
                    </div>
                    <span className="email-text">ajadhav01@trupers</span>
                  </div>
                  <button className="add-email-btn">+Add Email Address</button>
                </div>
                <div className="form-field">
                  <label className="field-label">Connected Apps</label>
                  <div className="connected-apps">
                    <div className="app-icon">
                      <img className='app-icon-img' src={smsIcon} alt="Email" width="20" height="20" />
                    </div>
                    <div className="app-icon">
                      <img className='app-icon-img' src={smsIcon} alt="Email" width="20" height="20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Settings
