import React from 'react';
import { portfolioItems } from '../../data/dummyData';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import '../../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  const totalInvested = portfolioItems.reduce((sum, item) => sum + item.investmentValue, 0);
  const totalCurrent = portfolioItems.reduce((sum, item) => sum + item.currentValue, 0);
  const totalReturns = totalCurrent - totalInvested;
  const returnPercentage = (totalReturns / totalInvested) * 100;

  const pieData = portfolioItems.map(item => ({
    name: item.fundName,
    value: item.currentValue
  }));

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const portfolioTrend = [
    { month: 'Jan', value: 480000 },
    { month: 'Feb', value: 520000 },
    { month: 'Mar', value: 550000 },
    { month: 'Apr', value: 590000 },
    { month: 'May', value: 620000 },
    { month: 'Jun', value: 680000 },
    { month: 'Jul', value: 720000 }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Your Portfolio</h1>
        <p>Track your investments and performance</p>
      </div>

      {/* Summary Cards */}
      <div className="portfolio-summary">
        <div className="summary-card">
          <span className="summary-label">Total Invested</span>
          <span className="summary-value">₹{totalInvested.toLocaleString()}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Current Value</span>
          <span className="summary-value">₹{totalCurrent.toLocaleString()}</span>
        </div>
        <div className="summary-card">
          <span className="summary-label">Returns</span>
          <span className={`summary-value ${totalReturns >= 0 ? 'positive' : 'negative'}`}>
            ₹{totalReturns.toLocaleString()} ({returnPercentage.toFixed(2)}%)
          </span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Portfolio Trend */}
        <div className="chart-card">
          <h2>Portfolio Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Portfolio Allocation */}
        <div className="chart-card">
          <h2>Fund Allocation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name.substring(0, 10)}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="holdings-section">
        <h2>Your Holdings</h2>
        <table className="table holdings-table">
          <thead>
            <tr>
              <th>Fund Name</th>
              <th>Units</th>
              <th>Invested Value</th>
              <th>Current Value</th>
              <th>Gains/Loss</th>
              <th>Return %</th>
            </tr>
          </thead>
          <tbody>
            {portfolioItems.map((item) => {
              const gains = item.currentValue - item.investmentValue;
              const gainPercentage = (gains / item.investmentValue) * 100;

              return (
                <tr key={item.id}>
                  <td>{item.fundName}</td>
                  <td>{item.units}</td>
                  <td>₹{item.investmentValue.toLocaleString()}</td>
                  <td>₹{item.currentValue.toLocaleString()}</td>
                  <td className={gains >= 0 ? 'positive' : 'negative'}>
                    ₹{gains.toLocaleString()}
                  </td>
                  <td className={gains >= 0 ? 'positive' : 'negative'}>
                    {gainPercentage.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
            <tr className="table-total">
              <td><strong>Total</strong></td>
              <td>{portfolioItems.reduce((sum, i) => sum + i.units, 0)}</td>
              <td><strong>₹{totalInvested.toLocaleString()}</strong></td>
              <td><strong>₹{totalCurrent.toLocaleString()}</strong></td>
              <td className={totalReturns >= 0 ? 'positive' : 'negative'}>
                <strong>₹{totalReturns.toLocaleString()}</strong>
              </td>
              <td className={totalReturns >= 0 ? 'positive' : 'negative'}>
                <strong>{returnPercentage.toFixed(2)}%</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
