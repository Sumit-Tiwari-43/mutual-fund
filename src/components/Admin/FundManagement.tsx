import React, { useState } from 'react';
import { mutualFunds } from '../../data/dummyData';
import { Plus, Edit2, Trash2, TrendingUp } from 'lucide-react';
import '../../styles/FundManagement.css';

const FundManagement: React.FC = () => {
  const [funds, setFunds] = useState(mutualFunds);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Equity',
    category: '',
    nav: 0,
    expense_ratio: 0
  });

  const handleAddFund = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.category) {
      const newFund = {
        id: String(funds.length + 1),
        ...formData,
        return_1yr: 0,
        return_3yr: 0,
        return_5yr: 0,
        aum: 0,
        min_investment: 5000,
        description: '',
        strategy: '',
        risk_level: 'Medium'
      };
      setFunds([...funds, newFund]);
      setFormData({ name: '', type: 'Equity', category: '', nav: 0, expense_ratio: 0 });
      setShowAddForm(false);
    }
  };

  const handleDeleteFund = (id: string) => {
    setFunds(funds.filter(f => f.id !== id));
  };

  return (
    <div className="fund-management">
      <div className="management-header">
        <h1>Mutual Fund Management</h1>
        <p>Add, edit, and manage mutual fund content</p>
        <button
          className="btn btn-primary"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} /> Add New Fund
        </button>
      </div>

      {/* Add Fund Form */}
      {showAddForm && (
        <div className="add-fund-form">
          <h2>Add New Mutual Fund</h2>
          <form onSubmit={handleAddFund}>
            <div className="form-row">
              <div className="form-group">
                <label>Fund Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Fund Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option>Equity</option>
                  <option>Debt</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Large Cap, Small Cap"
                  required
                />
              </div>
              <div className="form-group">
                <label>NAV (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.nav}
                  onChange={(e) => setFormData({ ...formData, nav: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expense Ratio (%)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.expense_ratio}
                  onChange={(e) => setFormData({ ...formData, expense_ratio: parseFloat(e.target.value) })}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Add Fund</button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Fund List */}
      <div className="fund-list">
        <h2>Existing Funds ({funds.length})</h2>
        <div className="fund-cards">
          {funds.map((fund) => (
            <div key={fund.id} className="fund-card">
              <div className="fund-header">
                <h3>{fund.name}</h3>
                <div className="fund-actions">
                  <button className="icon-btn edit" title="Edit">
                    <Edit2 size={18} />
                  </button>
                  <button
                    className="icon-btn delete"
                    title="Delete"
                    onClick={() => handleDeleteFund(fund.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="fund-details">
                <div className="detail-item">
                  <span className="label">Type:</span>
                  <span className="badge badge-blue">{fund.type}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Category:</span>
                  <span>{fund.category}</span>
                </div>
              </div>

              <div className="fund-metrics">
                <div className="metric">
                  <span className="metric-label">NAV</span>
                  <span className="metric-value">₹{fund.nav}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Expense Ratio</span>
                  <span className="metric-value">{fund.expense_ratio}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">AUM</span>
                  <span className="metric-value">₹{fund.aum}Cr</span>
                </div>
                <div className="metric">
                  <span className="metric-label">1Y Return</span>
                  <span className="metric-value">
                    <TrendingUp size={16} style={{ display: 'inline' }} /> {fund.return_1yr}%
                  </span>
                </div>
              </div>

              <div className="fund-footer">
                <span className={`badge ${fund.risk_level.includes('Low') ? 'badge-green' : fund.risk_level.includes('High') ? 'badge-red' : 'badge-yellow'}`}>
                  Risk: {fund.risk_level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundManagement;
