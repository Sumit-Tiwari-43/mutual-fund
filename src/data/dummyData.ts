// Dummy data for the mutual funds platform

export interface MutualFund {
  id: string;
  name: string;
  type: string;
  category: string;
  nav: number;
  expense_ratio: number;
  risk_level: string;
  return_1yr: number;
  return_3yr: number;
  return_5yr: number;
  aum: number;
  min_investment: number;
  description: string;
  strategy: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  investments?: number;
}

export interface Fund {
  id: string;
  name: string;
  nav: number;
  change: number;
  type: string;
}

export interface PortfolioItem {
  id: string;
  fundName: string;
  units: number;
  investmentValue: number;
  currentValue: number;
  returns: number;
}

export const mutualFunds: MutualFund[] = [
  {
    id: '1',
    name: 'Axis Bluechip Fund',
    type: 'Equity',
    category: 'Large Cap',
    nav: 3456.78,
    expense_ratio: 0.54,
    risk_level: 'Low-Medium',
    return_1yr: 12.5,
    return_3yr: 15.3,
    return_5yr: 18.2,
    aum: 15000,
    min_investment: 5000,
    description: 'Invests in large-cap equities with strong fundamentals',
    strategy: 'Growth focused investment in stable blue-chip companies'
  },
  {
    id: '2',
    name: 'SBI Small Cap Fund',
    type: 'Equity',
    category: 'Small Cap',
    nav: 2345.90,
    expense_ratio: 0.95,
    risk_level: 'High',
    return_1yr: 24.3,
    return_3yr: 28.5,
    return_5yr: 32.1,
    aum: 8500,
    min_investment: 1000,
    description: 'High growth potential in small cap companies',
    strategy: 'Aggressive growth strategy targeting emerging businesses'
  },
  {
    id: '3',
    name: 'ICICI Prudential Balanced Advantage Fund',
    type: 'Hybrid',
    category: 'Balanced',
    nav: 1856.45,
    expense_ratio: 0.62,
    risk_level: 'Medium',
    return_1yr: 14.2,
    return_3yr: 16.8,
    return_5yr: 19.4,
    aum: 12000,
    min_investment: 5000,
    description: 'Dynamic allocation between equity and debt',
    strategy: 'Balanced approach with dynamic asset allocation'
  },
  {
    id: '4',
    name: 'Mindtree Dividend Yield Fund',
    type: 'Equity',
    category: 'Dividend',
    nav: 3234.56,
    expense_ratio: 0.58,
    risk_level: 'Low-Medium',
    return_1yr: 10.5,
    return_3yr: 12.8,
    return_5yr: 15.6,
    aum: 11000,
    min_investment: 5000,
    description: 'Focus on dividend-paying stocks',
    strategy: 'Income generation through dividend-yielding stocks'
  },
  {
    id: '5',
    name: 'HDFC Mid Cap Opportunities Fund',
    type: 'Equity',
    category: 'Mid Cap',
    nav: 2567.89,
    expense_ratio: 0.78,
    risk_level: 'Medium-High',
    return_1yr: 18.9,
    return_3yr: 22.3,
    return_5yr: 25.7,
    aum: 9800,
    min_investment: 5000,
    description: 'Growth opportunities in mid-cap segment',
    strategy: 'Mid-cap focused strategy for balanced growth'
  },
  {
    id: '6',
    name: 'UTI Liquid Fund',
    type: 'Debt',
    category: 'Liquid',
    nav: 2156.34,
    expense_ratio: 0.18,
    risk_level: 'Very Low',
    return_1yr: 5.2,
    return_3yr: 5.8,
    return_5yr: 6.1,
    aum: 18000,
    min_investment: 1000,
    description: 'Short-term liquidity management',
    strategy: 'Investment in short-term debt instruments'
  },
  {
    id: '7',
    name: 'Kotak Emerging Equity Fund',
    type: 'Equity',
    category: 'Multi Cap',
    nav: 1945.67,
    expense_ratio: 0.65,
    risk_level: 'Medium',
    return_1yr: 16.3,
    return_3yr: 19.2,
    return_5yr: 22.5,
    aum: 7600,
    min_investment: 5000,
    description: 'Emerging opportunities across market caps',
    strategy: 'Multi-cap strategy across emerging companies'
  },
  {
    id: '8',
    name: 'Franklin India Flexi Cap Fund',
    type: 'Equity',
    category: 'Flexi Cap',
    nav: 2723.45,
    expense_ratio: 0.68,
    risk_level: 'Medium',
    return_1yr: 17.5,
    return_3yr: 20.1,
    return_5yr: 23.8,
    aum: 10200,
    min_investment: 5000,
    description: 'Flexible allocation across market capitalizations',
    strategy: 'Flexible cap allocation strategy'
  }
];

export const users: UserData[] = [
  {
    id: '1',
    name: 'Raj Kumar',
    email: 'raj@investor.com',
    role: 'Investor',
    status: 'Active',
    joinDate: '2023-01-15',
    investments: 5
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@advisor.com',
    role: 'Financial Advisor',
    status: 'Active',
    joinDate: '2022-06-20'
  },
  {
    id: '3',
    name: 'Amit Singh',
    email: 'amit@analyst.com',
    role: 'Data Analyst',
    status: 'Active',
    joinDate: '2023-03-10'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah@investor.com',
    role: 'Investor',
    status: 'Active',
    joinDate: '2024-01-05',
    investments: 3
  },
  {
    id: '5',
    name: 'Vikram Patel',
    email: 'vikram@investor.com',
    role: 'Investor',
    status: 'Inactive',
    joinDate: '2022-09-12',
    investments: 0
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    fundName: 'Axis Bluechip Fund',
    units: 100,
    investmentValue: 250000,
    currentValue: 281000,
    returns: 12.4
  },
  {
    id: '2',
    fundName: 'ICICI Prudential Balanced Advantage Fund',
    units: 200,
    investmentValue: 300000,
    currentValue: 315500,
    returns: 5.2
  },
  {
    id: '3',
    fundName: 'SBI Small Cap Fund',
    units: 50,
    investmentValue: 100000,
    currentValue: 124250,
    returns: 24.25
  }
];

export const performanceData = [
  { month: 'Jan', return: 8.5, benchmark: 7.2 },
  { month: 'Feb', return: 9.2, benchmark: 8.1 },
  { month: 'Mar', return: 11.3, benchmark: 10.2 },
  { month: 'Apr', return: 10.8, benchmark: 9.8 },
  { month: 'May', return: 12.5, benchmark: 11.3 },
  { month: 'Jun', return: 14.2, benchmark: 12.8 },
  { month: 'Jul', return: 13.9, benchmark: 12.5 },
  { month: 'Aug', return: 15.3, benchmark: 13.9 },
  { month: 'Sep', return: 16.8, benchmark: 15.2 },
  { month: 'Oct', return: 17.5, benchmark: 16.1 },
  { month: 'Nov', return: 18.2, benchmark: 17.3 },
  { month: 'Dec', return: 19.1, benchmark: 18.5 }
];

export const investmentTrends = [
  { date: 'Week 1', equity: 45, debt: 35, hybrid: 20 },
  { date: 'Week 2', equity: 48, debt: 32, hybrid: 20 },
  { date: 'Week 3', equity: 50, debt: 30, hybrid: 20 },
  { date: 'Week 4', equity: 52, debt: 28, hybrid: 20 },
  { date: 'Week 5', equity: 55, debt: 25, hybrid: 20 },
  { date: 'Week 6', equity: 57, debt: 23, hybrid: 20 },
  { date: 'Week 7', equity: 60, debt: 20, hybrid: 20 },
  { date: 'Week 8', equity: 62, debt: 18, hybrid: 20 }
];

export const educationalContent = [
  {
    id: '1',
    title: 'Understanding Mutual Funds',
    description: 'Learn the basics of mutual fund investing',
    category: 'Basics',
    content: 'A mutual fund is an investment vehicle that pools money from multiple investors to purchase securities.'
  },
  {
    id: '2',
    title: 'Risk and Return Analysis',
    description: 'Understanding risk-return tradeoff',
    category: 'Analysis',
    content: 'Risk and return are directly related. Higher returns typically come with higher risk exposure.'
  },
  {
    id: '3',
    title: 'Portfolio Diversification',
    description: 'Building a diversified investment portfolio',
    category: 'Strategy',
    content: 'Diversification is a key strategy to reduce portfolio risk across different asset classes.'
  }
];

export const fundRecommendations = [
  {
    id: '1',
    fundId: '1',
    fundName: 'Axis Bluechip Fund',
    reason: 'Strong performance and low volatility',
    suitableFor: 'Conservative investors',
    expectedReturn: '12-14%'
  },
  {
    id: '2',
    fundId: '2',
    fundName: 'SBI Small Cap Fund',
    reason: 'High growth potential for long-term investors',
    suitableFor: 'Aggressive investors',
    expectedReturn: '20-25%'
  },
  {
    id: '3',
    fundId: '3',
    fundName: 'ICICI Prudential Balanced Advantage Fund',
    reason: 'Dynamic allocation strategy',
    suitableFor: 'Moderate investors',
    expectedReturn: '12-16%'
  }
];

export const dashboardStats = {
  totalAUM: 92100,
  totalFunds: 8,
  totalInvestors: 150000,
  totalAdvisors: 250
};
