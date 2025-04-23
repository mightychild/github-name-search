import React from 'react';
import { FiGithub, FiUsers, FiBook, FiExternalLink } from 'react-icons/fi';

function UserProfile({ user }) {
  return (
    <div className="user-profile-card">
      <div className="profile-header">
        <img 
          src={user.avatar_url} 
          alt={`${user.login}'s avatar`} 
          className="profile-avatar"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150';
          }}
        />
        <div className="profile-info">
          <h2 className="profile-name">
            {user.name || user.login}
            {user.name && <span className="profile-username">@{user.login}</span>}
          </h2>
          {user.bio && <p className="profile-bio">{user.bio}</p>}
          {user.location && (
            <p className="profile-meta">
              <span className="meta-icon">📍</span> {user.location}
            </p>
          )}
        </div>
      </div>
      
      <div className="profile-stats">
        <div className="stat-item">
          <FiBook className="stat-icon" />
          <div>
            <span className="stat-number">{user.public_repos.toLocaleString()}</span>
            <span className="stat-label">Repositories</span>
          </div>
        </div>
        <div className="stat-item">
          <FiUsers className="stat-icon" />
          <div>
            <span className="stat-number">{user.followers.toLocaleString()}</span>
            <span className="stat-label">Followers</span>
          </div>
        </div>
        <div className="stat-item">
          <FiUsers className="stat-icon" />
          <div>
            <span className="stat-number">{user.following.toLocaleString()}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>
      
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        <FiGithub className="link-icon" />
        View GitHub Profile
        <FiExternalLink className="external-icon" />
      </a>
    </div>
  );
}

export default UserProfile;