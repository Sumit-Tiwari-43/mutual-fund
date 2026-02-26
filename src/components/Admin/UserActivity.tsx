import React, { useState } from 'react';
import { users } from '../../data/dummyData';
import { Search, Filter } from 'lucide-react';
import '../../styles/UserActivity.css';

const UserActivity: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roles = ['all', ...new Set(users.map(u => u.role))];

  return (
    <div className="user-activity">
      <div className="activity-header">
        <h1>User Activity</h1>
        <p>Monitor and manage user activities</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-container">
          <Filter size={20} className="filter-icon" />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="filter-select"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role === 'all' ? 'All Roles' : role}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* User Table */}
      <div className="activity-table-container">
        <table className="table activity-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className="badge badge-blue">{user.role}</span>
                </td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <button className="action-link">View</button>
                  <button className="action-link delete">Deactivate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="activity-stats">
        <div className="stat-box">
          <span className="stat-label">Total Users</span>
          <span className="stat-count">{users.length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Filtered Users</span>
          <span className="stat-count">{filteredUsers.length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Active</span>
          <span className="stat-count active">{users.filter(u => u.status === 'Active').length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Inactive</span>
          <span className="stat-count inactive">{users.filter(u => u.status === 'Inactive').length}</span>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
