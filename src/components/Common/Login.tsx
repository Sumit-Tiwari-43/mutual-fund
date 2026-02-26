import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import '../../styles/Login.css';

interface LoginProps {
  onLogin: (role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('investor');
  const navigate = useNavigate();

  const roles = [
    { id: 'admin', label: 'Admin', icon: '👨‍💼' },
    { id: 'investor', label: 'Investor', icon: '💼' },
    { id: 'advisor', label: 'Financial Advisor', icon: '📊' },
    { id: 'analyst', label: 'Data Analyst', icon: '📈' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && selectedRole) {
      onLogin(selectedRole);
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">💰</div>
          <h1>Mutual Funds Platform</h1>
          <p>Investment Perception & Selection Behavior Analysis</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Role Selection */}
          <div className="form-section">
            <label className="form-label">Select Your Role</label>
            <div className="role-grid">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  className={`role-button ${selectedRole === role.id ? 'active' : ''}`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <span className="role-emoji">{role.icon}</span>
                  <span className="role-name">{role.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="demo-credentials">
            <p><strong>Demo Credentials:</strong></p>
            <ul>
              <li>Email: demo@example.com</li>
              <li>Password: demo123</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-login">
            <LogIn size={20} /> Login to Dashboard
          </button>

          <p className="login-footer">
            For demonstration purposes only - Academic Project
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
