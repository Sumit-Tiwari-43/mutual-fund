import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BarChart3, Zap } from 'lucide-react';
import '../../styles/Home.css';

interface HomeProps {
  userRole: string | null;
}

const Home: React.FC<HomeProps> = ({ userRole }) => {
  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Fund Analysis',
      description: 'Comprehensive analysis of mutual funds with risk and return metrics'
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Recommendations',
      description: 'Get personalized recommendations from financial advisors'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Performance Tracking',
      description: 'Track fund performance and investment trends real-time'
    },
    {
      icon: <Zap size={32} />,
      title: 'Portfolio Management',
      description: 'Manage and optimize your investment portfolio effectively'
    }
  ];

  const getRoleGreeting = () => {
    switch (userRole) {
      case 'admin':
        return 'Welcome Admin! Manage platform and funds';
      case 'investor':
        return 'Welcome Investor! Explore and invest in mutual funds';
      case 'advisor':
        return 'Welcome Advisor! Create content and recommendations';
      case 'analyst':
        return 'Welcome Analyst! Analyze trends and generate reports';
      default:
        return 'Welcome to the Mutual Funds Platform';
    }
  };

  const getActionButtons = () => {
    switch (userRole) {
      case 'admin':
        return [
          { path: '/admin/dashboard', label: 'Go to Dashboard' },
          { path: '/admin/funds', label: 'Manage Funds' }
        ];
      case 'investor':
        return [
          { path: '/investor/funds', label: 'Browse Funds' },
          { path: '/investor/portfolio', label: 'View Portfolio' }
        ];
      case 'advisor':
        return [
          { path: '/advisor/dashboard', label: 'Go to Dashboard' },
          { path: '/advisor/content', label: 'Create Content' }
        ];
      case 'analyst':
        return [
          { path: '/analyst/dashboard', label: 'Go to Dashboard' },
          { path: '/analyst/reports', label: 'View Reports' }
        ];
      default:
        return [{ path: '/login', label: 'Login to Continue' }];
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Investment Perception & Selection Behavior Analysis Platform</h1>
          <p>
            A comprehensive platform to analyze mutual fund investments, track performance,
            and make informed investment decisions.
          </p>
          <div className="hero-buttons">
            {getActionButtons().map((btn) => (
              <Link key={btn.path} to={btn.path} className="btn btn-primary">
                {btn.label}
              </Link>
            ))}
          </div>
          <div className="hero-greeting">
            <p className="greeting-text">{getRoleGreeting()}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="overview">
        <div className="container">
          <h2>Platform Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>📊 For Investors</h3>
              <p>
                Browse and compare mutual funds, view detailed fund information,
                manage your portfolio, and track performance metrics.
              </p>
              {userRole === 'investor' && (
                <Link to="/investor/funds" className="btn btn-primary btn-small">
                  Explore Funds
                </Link>
              )}
            </div>

            <div className="overview-card">
              <h3>👨‍💼 For Administrators</h3>
              <p>
                Manage platform content, monitor user activities, maintain mutual fund
                database, and oversee platform operations.
              </p>
              {userRole === 'admin' && (
                <Link to="/admin/dashboard" className="btn btn-primary btn-small">
                  Admin Dashboard
                </Link>
              )}
            </div>

            <div className="overview-card">
              <h3>📈 For Advisors</h3>
              <p>
                Create educational content, provide fund recommendations,
                and guide investors through their investment journey.
              </p>
              {userRole === 'advisor' && (
                <Link to="/advisor/dashboard" className="btn btn-primary btn-small">
                  Advisor Dashboard
                </Link>
              )}
            </div>

            <div className="overview-card">
              <h3>📉 For Analysts</h3>
              <p>
                Analyze fund performance trends, generate detailed reports,
                and provide insights on market behavior and investment patterns.
              </p>
              {userRole === 'analyst' && (
                <Link to="/analyst/dashboard" className="btn btn-primary btn-small">
                  Analytics Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <h2>Platform Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Mutual Funds</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150K+</div>
              <div className="stat-label">Active Investors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹92B</div>
              <div className="stat-label">Assets Under Management</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">250+</div>
              <div className="stat-label">Expert Advisors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of investors making informed decisions through our platform.
          </p>
          {!userRole && (
            <Link to="/login" className="btn btn-primary">
              Login Now
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
