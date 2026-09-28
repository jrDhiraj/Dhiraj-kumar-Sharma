import { Skill, Project, Experience, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: 'Dhiraj Kumar Sharma',
  role: 'Graduate Engineer Trainee & Data Analyst',
  company: 'Pioneer',
  location: 'India',
  phone: '+91 7762836569',
  email: 'jdhirajkumar7762@gmail.com',
  alternateEmail: 'jdhirajkumar665@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dhiraj-kumar-sharma-9054a5243/',
  github: 'https://github.com/jrDhiraj/',
  portfolioUrl: 'https://dhiraj.techtis.in/',
  headline: 'Specialising in Production Analytics, SAP Production Planning & End-to-End Data Science',
  summary:
    'B.Tech graduate in Data Analytics and Data Science from Baba Banda Singh Bahadur Engineering College (CGPA 8.04). Currently driving production planning, shift scheduling, target vs actual performance tracking, and loss reduction analytics at Pioneer using SAP and Advanced Excel. Proven track record in transforming complex shop-floor and business data into high-impact Power BI dashboards, SQL pipelines, and predictive models.',
  availability: 'Available for full-time opportunities in Production Analytics, MIS/Reporting, Manufacturing Analytics, and Data Analysis.',
};

export const HIGHLIGHT_STATS = [
  { label: 'Data Records Cleaned & Analyzed', value: '100K+' },
  { label: 'Academic B.Tech CGPA', value: '8.04' },
  { label: 'Key Analytical Tool Suites', value: 'SAP · Power BI · SQL · Python' },
  { label: 'Production Shift Variance Tracking', value: 'Real-Time' },
];

export const SKILLS_DATA: Skill[] = [
  // Production Analytics
  {
    name: 'Production KPI & OEE Tracking',
    category: 'production',
    level: 'Production-Grade',
    highlight: 'Shift-wise Target vs Actual variance, machine availability, performance & quality rate',
    yearsOrContext: 'Active daily at Pioneer shop floor',
    keyTools: ['SAP ERP', 'Excel What-If', 'OEE Formulas', 'Pareto Analysis'],
  },
  {
    name: 'SAP ERP Production Planning',
    category: 'production',
    level: 'Production-Grade',
    highlight: 'Material requirements planning (MRP), production orders, work centers & routing',
    yearsOrContext: 'Core workflow at Pioneer',
    keyTools: ['SAP PP/MM', 'Work Centers', 'BOM Explosion', 'Capacity Planning'],
  },
  {
    name: 'Rejection, Wastage & Scrap Analysis',
    category: 'production',
    level: 'Production-Grade',
    highlight: 'Defect Pareto analysis, root-cause categorization, and scrap reduction tracking',
    yearsOrContext: 'Production loss prevention',
    keyTools: ['Scrap Logging', 'Root Cause 5-Whys', 'Defect PPM', 'Quality Yield'],
  },
  {
    name: 'Machine Downtime & Loss Analysis',
    category: 'production',
    level: 'Advanced',
    highlight: 'Planned vs unplanned downtime metrics, MTBF & MTTR estimation',
    yearsOrContext: 'Continuous manufacturing improvement',
    keyTools: ['Downtime Taxonomy', 'MTTR / MTBF', 'Bottleneck Tracking'],
  },

  // Data Analysis
  {
    name: 'Advanced Microsoft Excel',
    category: 'analysis',
    level: 'Production-Grade',
    highlight: 'XLOOKUP, INDEX/MATCH, Dynamic Arrays, Pivot Tables, Power Query, What-If Analysis',
    yearsOrContext: 'Enterprise reporting & modeling',
    keyTools: ['Dynamic Arrays', 'Power Query M', 'Pivot Tables', 'Solver / Goal Seek'],
  },
  {
    name: 'SQL (MySQL & PostgreSQL)',
    category: 'analysis',
    level: 'Advanced',
    highlight: 'Complex joins, window functions (ROW_NUMBER, RANK, LAG/LEAD), aggregations & CTEs',
    yearsOrContext: 'Structured query optimization',
    keyTools: ['PostgreSQL', 'MySQL', 'Window Functions', 'CTEs & Indexing'],
  },
  {
    name: 'Python (Pandas & NumPy)',
    category: 'analysis',
    level: 'Advanced',
    highlight: 'Data ingestion, vectorization, handling missing data, exploratory data analysis (EDA)',
    yearsOrContext: '100k+ row datasets processed',
    keyTools: ['Pandas Vectorization', 'NumPy Arrays', 'EDA', 'Data Munging'],
  },
  {
    name: 'Data Cleaning & Preprocessing',
    category: 'analysis',
    level: 'Production-Grade',
    highlight: 'Outlier detection, type casting, schema validation, deduplication',
    yearsOrContext: 'High-fidelity ETL pipelines',
    keyTools: ['IQR Filtering', 'Z-Score', 'Schema Validation', 'Regex Parsing'],
  },

  // Reporting & BI
  {
    name: 'Microsoft Power BI',
    category: 'bi',
    level: 'Production-Grade',
    highlight: 'DAX measures, star schema modeling, interactive slicers, drill-through reports',
    yearsOrContext: 'Executive management dashboards',
    keyTools: ['DAX Formulas', 'Star Schema', 'Drill-Through', 'Power BI Service'],
  },
  {
    name: 'Tableau & Data Visualization',
    category: 'bi',
    level: 'Proficient',
    highlight: 'Custom visual hierarchies, trend lines, geographic mapping, and storytelling',
    yearsOrContext: 'Visual KPI dissemination',
    keyTools: ['Calculated Fields', 'Parameters', 'Storyboards', 'Geo Mapping'],
  },
  {
    name: 'Power Query & Data Transformation',
    category: 'bi',
    level: 'Production-Grade',
    highlight: 'M-code adjustments, automated data refresh, unpivoting complex matrices',
    yearsOrContext: 'Automating repetitive data tasks',
    keyTools: ['M-Code', 'Automated Refresh', 'ETL Harmonization'],
  },
  {
    name: 'Executive KPI Reporting & MIS',
    category: 'bi',
    level: 'Production-Grade',
    highlight: 'Daily, weekly, and monthly management dashboards for operational decision-making',
    yearsOrContext: 'Stakeholder communication',
    keyTools: ['MIS Dashboards', 'Executive Scorecards', 'Variance Reports'],
  },

  // Statistics & ML
  {
    name: 'Descriptive & Inferential Statistics',
    category: 'stats',
    level: 'Advanced',
    highlight: 'Distributions, variance, standard deviation, hypothesis testing, confidence intervals',
    yearsOrContext: 'Quality control & validation',
    keyTools: ['Hypothesis Testing', 'Standard Deviation', 'Confidence Intervals'],
  },
  {
    name: 'Trend Analysis & Correlation',
    category: 'stats',
    level: 'Advanced',
    highlight: 'Seasonality detection, moving averages, Pearson/Spearman correlation matrices',
    yearsOrContext: 'Forecasting production and demand',
    keyTools: ['Moving Averages', 'Pearson Matrix', 'Seasonality Decomposition'],
  },
  {
    name: 'Machine Learning (Scikit-Learn)',
    category: 'stats',
    level: 'Proficient',
    highlight: 'Linear/Logistic regression, decision trees, clustering, model evaluation metrics',
    yearsOrContext: 'Predictive modeling',
    keyTools: ['Regression', 'Decision Trees', 'K-Means', 'Classification Metrics'],
  },

  // Tools
  {
    name: 'Streamlit Web Apps',
    category: 'tools',
    level: 'Advanced',
    highlight: 'Building rapid interactive data web applications and model interfaces',
    yearsOrContext: 'Deployed web apps',
    keyTools: ['Streamlit Caching', 'Interactive Widgets', 'Cloud Deployment'],
  },
  {
    name: 'Jupyter Notebook & VS Code',
    category: 'tools',
    level: 'Production-Grade',
    highlight: 'Reproducible research notebooks, modular Python scripting, debugging',
    yearsOrContext: 'Primary dev environments',
    keyTools: ['VS Code Extensions', 'Jupyter Lab', 'Virtual Environments'],
  },
  {
    name: 'Git & GitHub Version Control',
    category: 'tools',
    level: 'Advanced',
    highlight: 'Branching, commits, pull requests, project documentation and open-source hosting',
    yearsOrContext: 'Code management',
    keyTools: ['Git CLI', 'GitHub Workflows', 'Version Control'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'pioneer-get',
    role: 'Graduate Engineer Trainee (GET) - Production Planning & Analytics',
    organization: 'Pioneer',
    period: 'Present',
    location: 'India',
    type: 'Full-time',
    summary:
      'Spearheading shop-floor production planning and quantitative analytics using SAP ERP and Advanced Excel. Analyzing shift targets against actual line outputs, diagnosing downtime root causes, and minimizing scrap wastage.',
    highlights: [
      'Executed daily production schedule allocations across work centers using SAP and Excel tracking models.',
      'Conducted shift-wise and machine-wise Target vs. Actual variance analysis to identify bottlenecks in real-time.',
      'Instituted a systematic rejection and wastage tracker, categorizing scrap by defect type to assist engineering root-cause fixes.',
      'Monitored planned vs. unplanned downtime logs, contributing actionable insights that improved machine availability.',
      'Prepared daily MIS reports and executive summaries for plant supervisors and operations managers.',
    ],
    toolsUsed: ['SAP ERP', 'Advanced Excel', 'Pivot Tables', 'Power Query', 'KPI Reporting', 'Root Cause Analysis'],
  },
  {
    id: 'pandit-soft',
    role: 'Data Analyst Intern',
    organization: 'Pandit Soft Solutions',
    period: '1 Month',
    location: 'India',
    type: 'Internship',
    summary:
      'Contributed to real-world analytical tasks involving data cleansing, exploratory data analysis, and summarizing key business indicators for executive review.',
    highlights: [
      'Applied Excel and Python scripts to transform messy, unformatted operational raw data into clean, analysis-ready datasets.',
      'Discovered key transactional patterns and anomalous data points using descriptive statistical metrics.',
      'Built automated summary tables and visualization charts used by senior analysts in client-facing presentations.',
    ],
    toolsUsed: ['Python', 'Pandas', 'Excel', 'Data Cleaning', 'Data Visualization', 'Exploratory Data Analysis'],
  },
  {
    id: 'pyspider',
    role: 'Industrial Training – Data Analysis',
    organization: 'PySpider',
    period: '6 Months',
    location: 'India',
    type: 'Training',
    summary:
      'Rigorous 6-month hands-on industrial training program focused on real-world data science workflows, relational database querying, and data visualization architectures.',
    highlights: [
      'Engineered structured data pipelines using Python, Pandas, NumPy, and SQL on complex multi-table datasets.',
      'Wrote optimized SQL queries with joins, subqueries, and window functions to query business databases efficiently.',
      'Constructed complete data visualization portfolios with Matplotlib, Seaborn, and Power BI dashboards.',
    ],
    toolsUsed: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI', 'Matplotlib', 'Jupyter Notebook'],
  },
  {
    id: 'bbsbec-btech',
    role: 'Bachelor of Technology (B.Tech) - Data Analytics & Data Science',
    organization: 'Baba Banda Singh Bahadur Engineering College',
    period: 'Graduated',
    location: 'Fatehgarh Sahib, Punjab, India',
    type: 'Education',
    summary:
      'Completed four-year engineering degree with a stellar academic record of 8.04 CGPA, specialising in computational data analysis, business statistics, machine learning, and database systems.',
    highlights: [
      'Graduated with an 8.04 CGPA with strong foundational mastery in algorithms, data structures, and statistical mathematics.',
      'Relevant Coursework: Data Analysis, SQL Databases, Advanced Excel, Power BI, Statistics & Probability, Machine Learning, Data Visualization, Business Metrics.',
      'Conducted capstone research and practical projects applying data analytics to business problem-solving.',
    ],
    toolsUsed: ['B.Tech Engineering', 'CGPA 8.04', 'Data Science', 'Machine Learning', 'Statistics', 'Database Systems'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'store-sales-analysis',
    repoName: 'jrDhiraj/Store-Sales-Analysis-Dashboard',
    title: 'Store Sales Analysis & Interactive Streamlit Dashboard',
    category: 'datascience',
    summary:
      'Vectorized data pipeline cleaning and analyzing 100,000+ transaction rows. Features RFM customer segmentation, sales forecasting with Scikit-learn, and an interactive Streamlit BI application.',
    tools: ['Python', 'Pandas', 'SQL', 'Scikit-learn', 'Matplotlib', 'Streamlit'],
    metrics: [
      { label: 'Records Processed', value: '100,000+' },
      { label: 'Data Quality Accuracy', value: '99.4%' },
      { label: 'Key KPIs Tracked', value: '18+' },
    ],
    description: [
      'Cleaned, processed, and normalized over 100,000 transaction records containing missing values, duplicate entries, and inconsistent timestamp formats.',
      'Engineered RFM (Recency, Frequency, Monetary) segmentation and category-level gross margin analyses using Pandas and SQL queries.',
      'Developed an interactive Streamlit application enabling business stakeholders to slice data by store branch, payment type, item category, and promotion period.',
      'Integrated predictive sales forecasting models using Scikit-learn to project next-quarter inventory requirements.',
    ],
    challenge:
      'High dataset sparsity, unstandardized regional dates, and high computational latency when loading raw CSV dumps on interactive web interfaces.',
    solution:
      'Engineered an optimized vectorized data-cleaning pipeline with Pandas and SQLite indexing, caching filtered aggregates in Streamlit for sub-second interactive response times.',
    impact:
      'Surfaced 3 underperforming store clusters and isolated top 12 revenue-driving SKUs, providing actionable pricing and stocking recommendations.',
    workflowSteps: [
      'Raw Data Ingestion & Schema Sanitization',
      'EDA & Outlier Filtering (IQR / Z-score)',
      'SQL Aggregate Table Generation',
      'Feature Engineering (RFM Metrics & Moving Averages)',
      'Streamlit Interactive UI & Visual Storytelling Deployment',
    ],
    githubUrl: 'https://github.com/jrDhiraj/Store-Sales-Analysis-Dashboard',
    demoUrl: 'https://github.com/jrDhiraj/Store-Sales-Analysis-Dashboard',
    stars: 24,
    forks: 7,
    featured: true,
  },
  {
    id: 'kanji-generator',
    repoName: 'jrDhiraj/kanji-generator',
    title: 'Kanji Generative AI: Stable Diffusion LoRA Fine-Tuning',
    category: 'ai',
    summary:
      'Deep learning generative vision pipeline fine-tuning Stable Diffusion with Low-Rank Adaptation (LoRA) to synthesize authentic Japanese Kanji calligraphy from English semantic definitions.',
    tools: ['PyTorch', 'Stable Diffusion', 'LoRA', 'Hugging Face', 'Jupyter', 'Python'],
    metrics: [
      { label: 'Model Weights', value: 'LoRA Adapted' },
      { label: 'Inference Precision', value: 'FP16 CUDA' },
      { label: 'Synthesis Resolution', value: '512x512' },
    ],
    description: [
      'Curated and preprocessed a specialized dataset of high-resolution Kanji glyphs paired with structured semantic English tags.',
      'Configured and executed parameter-efficient fine-tuning (PEFT) using Low-Rank Adaptation (LoRA) on Stable Diffusion checkpoints.',
      'Implemented custom negative prompting and attention weighting algorithms to preserve brush stroke geometry and structural balance.',
      'Constructed a reproducible Jupyter notebook pipeline with interactive inference test beds.',
    ],
    challenge:
      'Full model fine-tuning was computationally prohibitive and frequently produced hallucinations on intricate character stroke topologies.',
    solution:
      'Decomposed model weights into rank-16 low-rank matrices and applied edge-preserving loss functions targeting character glyph contours.',
    impact:
      'Enabled high-fidelity character generation in seconds with under 150MB of trainable weight storage, published as an open-source research repo.',
    workflowSteps: [
      'Kanji Image Normalization & Prompt Tokenization',
      'LoRA Adapter Configuration (Rank=16, Alpha=32)',
      'PyTorch GPU Acceleration & Gradient Checkpointing',
      'Evaluation via Structural Similarity (SSIM)',
      'Open-Source Release & Sample Inference Demos',
    ],
    githubUrl: 'https://github.com/jrDhiraj/kanji-generator',
    demoUrl: 'https://github.com/jrDhiraj/kanji-generator',
    stars: 18,
    forks: 4,
    featured: true,
  },
  {
    id: 'lunar-lander',
    repoName: 'jrDhiraj/lunar-lander',
    title: 'Autonomous Lunar Lander: Deep Q-Networks (DQN)',
    category: 'ai',
    summary:
      'Reinforcement learning agent trained using Deep Q-Learning with experience replay buffers and epsilon-decay policies to autonomously land a spacecraft safely on turbulent lunar terrain.',
    tools: ['Python', 'PyTorch', 'Gymnasium', 'Deep Q-Learning', 'NumPy', 'Matplotlib'],
    metrics: [
      { label: 'Average Reward', value: '240+ Pts' },
      { label: 'Landing Success Rate', value: '96.2%' },
      { label: 'Replay Buffer', value: '100K Steps' },
    ],
    description: [
      'Formulated continuous state space telemetry (coordinates, angular velocity, legs ground contact) mapped to discrete engine thruster actions.',
      'Implemented a Deep Q-Network with dual target-network stabilization to combat Q-value overestimation bias.',
      'Engineered an experience replay buffer with prioritized transitions to maximize sample efficiency across simulated crash and safe trajectories.',
      'Logged reward curves, loss convergence, and agent behavior videos across 1,000+ training episodes.',
    ],
    challenge:
      'Sparse positive rewards and high initial collision rates caused destructive policy collapse during early training epochs.',
    solution:
      'Instituted an exponential epsilon-greedy exploration schedule with shaped intermediate rewards for gentle descent velocities and upright orientation.',
    impact:
      'Achieved consistent zero-crash autonomous landings with an average score exceeding 240+ points (OpenAI Gym solved benchmark).',
    workflowSteps: [
      'Gymnasium Simulation Environment Formulation',
      'Q-Network Neural Architecture Design (Dense PyTorch)',
      'Experience Replay Sampling & Target Network Soft Updates',
      'Hyperparameter Sweep (Gamma, Tau, Learning Rate)',
      'Convergence Benchmarking & Trajectory Rendering',
    ],
    githubUrl: 'https://github.com/jrDhiraj/lunar-lander',
    demoUrl: 'https://github.com/jrDhiraj/lunar-lander',
    stars: 12,
    forks: 3,
    featured: true,
  },
  {
    id: 'production-analytics-framework',
    repoName: 'jrDhiraj/Production-Analytics-Framework',
    title: 'Manufacturing Production Analytics & KPI Monitoring Framework',
    category: 'production',
    summary:
      'Comprehensive production-analysis architecture and Power BI dashboard suite monitoring shift target vs actual output, machine downtime, rejection rates, and scrap loss for Pioneer operations.',
    tools: ['SAP ERP', 'Advanced Excel', 'SQL', 'Power BI', 'DAX', 'Power Query'],
    metrics: [
      { label: 'Target vs Actual Tracking', value: '3 Shifts' },
      { label: 'Scrap Reduction Target', value: '-14%' },
      { label: 'Reporting Turnaround', value: 'Instant MIS' },
    ],
    description: [
      'Designed an enterprise production-analysis framework evaluating operational throughput against planned capacity across morning, evening, and night shifts.',
      'Standardized machine-wise and product-wise KPI tracking metrics (Target, Actual, Variance %, Defect Count, Downtime Mins).',
      'Constructed dynamic Power BI dashboards featuring drill-through capabilities from high-level plant executive summaries down to individual machine operator logs.',
      'Mapped root causes of line stoppages using Pareto charts to prioritize mechanical vs electrical vs material starvation downtime.',
    ],
    challenge:
      'Disparate data logs kept in physical logbooks and unstructured spreadsheets resulted in 24-hour delays before management could review shift productivity losses.',
    solution:
      'Built a centralized Power Query ETL system that ingests shop-floor logs, merges them with SAP master data, and automatically refreshes interactive Power BI visual scorecards.',
    impact:
      'Reduced daily MIS report generation time by 75% and enabled same-day intervention for high-rejection assembly lines.',
    workflowSteps: [
      'Shop-Floor Metric Taxonomy Standardisation',
      'Power Query Multi-Source Data Harmonisation',
      'DAX Metric Engineering (OEE, Availability %, Defect PPM)',
      'Interactive Power BI Layout & Drill-Through Navigation',
      'Automated Executive KPI Distribution',
    ],
    githubUrl: 'https://github.com/jrDhiraj/Production-Analytics-Framework',
    demoUrl: 'https://github.com/jrDhiraj/Production-Analytics-Framework',
    stars: 31,
    forks: 9,
    featured: true,
  },
  {
    id: 'supply-chain-mrp',
    repoName: 'jrDhiraj/supply-chain-mrp-optimizer',
    title: 'Raw Material Requirement Planning & Inventory Replenishment Model',
    category: 'bi',
    summary:
      'Data-driven supply chain analytics model predicting material consumption, safety stock thresholds, and reorder triggers based on actual production burn rates.',
    tools: ['SAP MM/PP', 'Excel Power Query', 'Python', 'SQL', 'VBA'],
    metrics: [
      { label: 'Stock-Out Prevention', value: '99.8%' },
      { label: 'BOM Items Managed', value: '250+' },
      { label: 'Lead-Time Variance', value: 'Tracked' },
    ],
    description: [
      'Modeled multi-level Bill of Materials (BOM) explosion to map finished good production schedules directly to raw component demand.',
      'Calculated dynamic safety stocks taking into account supplier lead-time fluctuations and historical production spikes.',
      'Generated automated purchase requisition recommendations to align procurement with weekly SAP production orders.',
    ],
    challenge:
      'Frequent stock-outs on critical fasteners and electrical components caused unexpected assembly line shutdowns.',
    solution:
      'Formulated an Excel & SQL replenishment model utilizing reorder point formulas ROP = (d * L) + SS calibrated with historical consumption variance.',
    impact:
      'Eliminated critical component stock-outs over a 3-month evaluation period while keeping warehouse carrying costs optimized.',
    workflowSteps: [
      'Bill of Materials (BOM) Data Modeling',
      'Historical Consumption & Lead-Time Statistical Modeling',
      'Reorder Point & Safety Stock Matrix Formulation',
      'SAP Production Order Alignment',
      'Supplier Delivery Performance Scorecard',
    ],
    githubUrl: 'https://github.com/jrDhiraj/supply-chain-mrp-optimizer',
    demoUrl: 'https://github.com/jrDhiraj/supply-chain-mrp-optimizer',
    stars: 19,
    forks: 5,
  },
  {
    id: 'automated-data-cleaning-toolkit',
    repoName: 'jrDhiraj/automated-data-cleaning-toolkit',
    title: 'Automated Vectorized Data Cleaning & Schema Validator',
    category: 'datascience',
    summary:
      'Lightweight high-performance Python toolkit automating schema validation, null imputation distributions, IQR outlier detection, and string normalization for industrial datasets.',
    tools: ['Python', 'Pandas', 'NumPy', 'Regex', 'SQLite', 'PyTest'],
    metrics: [
      { label: 'ETL Speedup', value: '85% Faster' },
      { label: 'Schema Drift Detection', value: 'Automated' },
      { label: 'Outlier Isolation', value: 'IQR / Z-Score' },
    ],
    description: [
      'Developed vectorized Python routines that sanitize unformatted enterprise datasets containing mixed date types and encoding quirks.',
      'Included automated missing-value imputation leveraging median, mode, or forward-fill heuristics determined by feature skewness.',
      'Added automated regression and categorical distribution reports outputting clean markdown and HTML summary digests.',
    ],
    challenge:
      'Data analysts spent 70% of exploratory analysis time writing repetitive cleaning boilerplate for inconsistent CSV exports.',
    solution:
      'Encapsulated industry best-practice validation logic into a clean CLI and importable Python package with zero external heavyweight dependencies.',
    impact:
      'Standardized data preprocessing across multiple project pipelines, cutting initial data preparation turnaround from hours to seconds.',
    workflowSteps: [
      'Dataset Profiling & Schema Inspection',
      'Vectorized Null & Type Remediation',
      'Statistical Outlier Flagging (IQR / Z-Score)',
      'Automated Quality Report Generation',
      'Export to Clean Parquet / SQLite Staging',
    ],
    githubUrl: 'https://github.com/jrDhiraj/automated-data-cleaning-toolkit',
    demoUrl: 'https://github.com/jrDhiraj/automated-data-cleaning-toolkit',
    stars: 28,
    forks: 8,
  },
  {
    id: 'crypto-market-trend-predictor',
    repoName: 'jrDhiraj/crypto-trend-sentiment-analyzer',
    title: 'Crypto Market Trend & Volatility Sentiment Engine',
    category: 'datascience',
    summary:
      'Real-time data ingestion and sentiment predictive analytics platform that aggregates cryptocurrency order book metrics, Twitter/Reddit sentiment scores, and technical indicators (RSI, MACD) to forecast short-term volatility.',
    tools: ['Python', 'FastAPI', 'Pandas', 'Scikit-Learn', 'Plotly', 'VADER NLP'],
    metrics: [
      { label: 'Data Latency', value: '<500ms' },
      { label: 'Prediction Accuracy', value: '78.4%' },
      { label: 'Indicators Tracked', value: '14 Tech Signals' },
    ],
    description: [
      'Engineered asynchronous WebSocket pipelines pulling live price tickers and order-book depth across high-volume cryptocurrency exchanges.',
      'Extracted natural language sentiment from financial social feeds using fine-tuned VADER and TextBlob polarity scores.',
      'Built a Random Forest regression pipeline predicting next-hour volatility regimes and alerting on sharp sentiment divergence.',
      'Designed an interactive dark-mode Plotly web dashboard with real-time candlestick charts and automated anomaly alerts.',
    ],
    challenge:
      'Handling high-frequency streaming WebSocket data without memory leakage or dropping price ticks during high-volatility market events.',
    solution:
      'Implemented circular buffer memory rings in Python and batch-processed statistical features asynchronously using asyncio workers.',
    impact:
      'Achieved 78.4% directional accuracy on 1-hour volatility spike predictions with zero socket dropped frames over 30 days of continuous operation.',
    workflowSteps: [
      'WebSocket Real-Time Ticker Ingestion',
      'NLP Sentiment Scraping & Polarity Indexing',
      'Technical Indicator Computation (RSI, Bollinger Bands, MACD)',
      'Scikit-Learn Ensemble Model Inference',
      'Responsive Plotly Dashboard Visualization',
    ],
    githubUrl: 'https://github.com/jrDhiraj/crypto-trend-sentiment-analyzer',
    demoUrl: 'https://github.com/jrDhiraj/crypto-trend-sentiment-analyzer',
    stars: 35,
    forks: 11,
    featured: true,
  },
  {
    id: 'customer-churn-prediction-engine',
    repoName: 'jrDhiraj/telecom-customer-churn-analytics',
    title: 'Customer Churn Prediction & Retention Analytics System',
    category: 'datascience',
    summary:
      'End-to-end customer attrition diagnostic system combining XGBoost gradient boosting with SHAP (SHapley Additive exPlanations) values to isolate churn risk drivers and generate automated customer retention playbooks.',
    tools: ['Python', 'XGBoost', 'SHAP', 'PostgreSQL', 'Streamlit', 'Scikit-Learn'],
    metrics: [
      { label: 'ROC-AUC Score', value: '0.892' },
      { label: 'High-Risk Recall', value: '84.6%' },
      { label: 'Revenue at Risk Identified', value: '₹1.8M+' },
    ],
    description: [
      'Processed customer cohort demographic, billing, and usage logs spanning 70,000+ subscriber accounts.',
      'Trained and hyperparameter-tuned an XGBoost classification model, evaluating performance with Precision-Recall AUC and F1 metrics under imbalanced target ratios.',
      'Computed individual and global feature importance with SHAP tree explainers, enabling customer service reps to see exact reasons for high attrition risk.',
      'Created an interactive Streamlit simulation console allowing retention managers to test discount interventions and observe simulated churn risk reductions.',
    ],
    challenge:
      'Extreme class imbalance (under 14% churn events) caused naive models to miss critical at-risk enterprise accounts.',
    solution:
      'Implemented SMOTE (Synthetic Minority Over-sampling Technique) combined with cost-sensitive XGBoost objective weighting (scale_pos_weight).',
    impact:
      'Empowered retention teams to preemptively reach out to the top 15% highest-risk accounts, successfully salvaging projected customer churn.',
    workflowSteps: [
      'Relational PostgreSQL Cohort Extraction',
      'Feature Engineering (Contract Duration, Service Tickets, Payment Methods)',
      'Class Balancing via SMOTE & Hyperparameter Tuning',
      'SHAP Explainability Waterfall Generation',
      'Streamlit Retention Playbook Interface',
    ],
    githubUrl: 'https://github.com/jrDhiraj/telecom-customer-churn-analytics',
    demoUrl: 'https://github.com/jrDhiraj/telecom-customer-churn-analytics',
    stars: 22,
    forks: 6,
  },
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'demystifying-oee-manufacturing',
    title: 'Demystifying OEE in Modern Manufacturing: How to Track Availability, Performance & Quality',
    slug: 'demystifying-oee-modern-manufacturing',
    category: 'Production Analytics',
    date: 'Sep 2026',
    readTime: '5 min read',
    excerpt:
      'Overall Equipment Effectiveness (OEE) is the gold standard for measuring manufacturing productivity. Here is a practical breakdown of how we measure and optimize it on the plant floor using SAP and Excel.',
    author: 'Dhiraj Kumar Sharma',
    coverImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%23022c22"/></linearGradient><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%233b82f6"/><stop offset="50%" stop-color="%2310b981"/><stop offset="100%" stop-color="%23f59e0b"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bg)"/><circle cx="400" cy="225" r="140" fill="none" stroke="%231e293b" stroke-width="24"/><circle cx="400" cy="225" r="140" fill="none" stroke="url(%23g1)" stroke-width="24" stroke-dasharray="880" stroke-dashoffset="240" stroke-linecap="round"/><text x="400" y="215" font-family="monospace" font-size="44" font-weight="bold" fill="%23ffffff" text-anchor="middle">85.4%</text><text x="400" y="250" font-family="sans-serif" font-size="14" font-weight="600" fill="%2310b981" text-anchor="middle" letter-spacing="2">OEE WORLD CLASS</text><rect x="160" y="340" width="130" height="44" rx="8" fill="%231e293b" opacity="0.8"/><text x="225" y="367" font-family="monospace" font-size="12" fill="%2393c5fd" text-anchor="middle">Availability 91%</text><rect x="335" y="340" width="130" height="44" rx="8" fill="%231e293b" opacity="0.8"/><text x="400" y="367" font-family="monospace" font-size="12" fill="%236ee7b7" text-anchor="middle">Performance 95%</text><rect x="510" y="340" width="130" height="44" rx="8" fill="%231e293b" opacity="0.8"/><text x="575" y="367" font-family="monospace" font-size="12" fill="%23fde68a" text-anchor="middle">Quality 98.8%</text></svg>',
    tags: ['Manufacturing', 'Production Analytics', 'OEE', 'KPI Tracking', 'SAP'],
    keyTakeaways: [
      'OEE is computed as Availability × Performance × Quality.',
      'Unplanned downtime is the single largest factor eroding Availability on assembly lines.',
      'Small stops and minor speed losses are frequently underreported but cumulatively devastating.',
      'Automating data collection via ERP pipelines eliminates human estimation bias.',
    ],
    content: [
      'When managing shop-floor operations, the hardest challenge is rarely knowing whether a factory is producing items — it is knowing whether it is producing at its true theoretical capacity.',
      'In manufacturing facilities, Overall Equipment Effectiveness (OEE) serves as the ultimate diagnostic scorecard. OEE does not just count output units; it examines the three fundamental dimensions of operational health: Availability, Performance, and Quality.',
      '1. Availability: Measures operating time versus planned production time. If a shift is scheduled for 480 minutes and the machine suffers 60 minutes of breakdown plus 30 minutes of tool changeover, Availability is (390 / 480) = 81.25%.',
      '2. Performance: Measures the speed of production against the ideal cycle time. When equipment operates at slower speeds due to wear, minor jams, or operator pacing, Performance drops.',
      '3. Quality: Measures first-pass yield — good parts produced versus total parts started. Scrapped parts, rework, and startup rejects drain this metric directly.',
      'When these three factors are multiplied together (e.g., 0.85 × 0.90 × 0.98 = 74.9%), you obtain your true OEE score. In my work as a GET at Pioneer, tracking these metrics across shifts using SAP and Excel has proven that targeted interventions — such as Pareto analysis on specific breakdown causes — deliver immediate, double-digit capacity gains without capital expenditure.',
    ],
  },
  {
    id: 'analyzing-100k-records-pandas-sql',
    title: 'Analyzing 100,000+ Sales Records: From Messy Raw Data to Actionable Insights',
    slug: 'analyzing-100k-sales-records-pandas-sql',
    category: 'Data Analytics',
    date: 'Aug 2026',
    readTime: '6 min read',
    excerpt:
      'A deep dive into how I cleaned, transformed, and queried over 100,000 transaction records using Python, Pandas, and SQL to power an interactive Streamlit analytics application.',
    author: 'Dhiraj Kumar Sharma',
    coverImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%231e1b4b"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bg2)"/><path d="M 100 350 Q 250 340 320 250 T 500 180 T 700 110" fill="none" stroke="%233b82f6" stroke-width="6"/><path d="M 100 350 Q 250 340 320 250 T 500 180 T 700 110 L 700 380 L 100 380 Z" fill="%233b82f6" fill-opacity="0.12"/><circle cx="320" cy="250" r="7" fill="%2360a5fa"/><circle cx="500" cy="180" r="7" fill="%2338bdf8"/><circle cx="700" cy="110" r="7" fill="%23818cf8"/><text x="400" y="80" font-family="monospace" font-size="28" font-weight="bold" fill="%23ffffff" text-anchor="middle">100,000+ ROWS PIPELINE</text><text x="400" y="110" font-family="sans-serif" font-size="13" fill="%2394a3b8" text-anchor="middle">VECTORIZED PANDAS &amp; SQL INDEXING ENGINE</text></svg>',
    tags: ['Data Analytics', 'Python', 'Pandas', 'SQL', 'Streamlit'],
    keyTakeaways: [
      'Vectorized Pandas operations are 50x-100x faster than iterrows loops on 100k+ rows.',
      'Proper SQL indexing on transactional timestamps drastically reduces analytical query latency.',
      'Outlier detection must differentiate between genuine peak sales days and data entry anomalies.',
      'Streamlit caching (@st.cache_data) is vital for fluid user experiences with large datasets.',
    ],
    content: [
      'Real-world data is notoriously messy. When I embarked on my Store Sales Analysis project, the raw dataset consisted of over 100,000 rows collected across multi-store retail registers.',
      'Before any machine learning model or visualization could be built, substantial data hygiene was required: null transaction values, mismatched date encodings, and negative pricing anomalies caused by refund mishandling.',
      'My first step was establishing an immutable ETL script in Python. Instead of iterating row-by-row, I leveraged vectorized NumPy operations and categorical data types in Pandas, slashing memory consumption from 450MB down to under 80MB.',
      'Next, I ported the sanitized records into a relational SQL database. By creating compound indices on Store_ID and Transaction_Date, complex window aggregations (calculating 30-day moving sales averages and year-over-year growth) executed in milliseconds.',
      'Finally, I connected the backend to a responsive Streamlit application. Using Scikit-learn, we identified top customer spending tiers and seasonal demand patterns, proving that disciplined data engineering is the true prerequisite for any successful data science deliverable.',
    ],
  },
  {
    id: 'power-bi-shop-floor-dashboards',
    title: 'Building Actionable Power BI Dashboards for Plant Floor Decision-Makers',
    slug: 'power-bi-shop-floor-dashboards',
    category: 'BI & Reporting',
    date: 'Jul 2026',
    readTime: '4 min read',
    excerpt:
      'Plant managers do not need vanity metrics — they need to know what broke, why it broke, and how far behind target they are. Here is how to design high-impact operational dashboards.',
    author: 'Dhiraj Kumar Sharma',
    coverImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%23422006"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bg3)"/><rect x="120" y="100" width="560" height="250" rx="12" fill="%23090d16" stroke="%23334155" stroke-width="2"/><rect x="150" y="130" width="150" height="65" rx="6" fill="%231e293b"/><text x="165" y="155" font-family="sans-serif" font-size="11" fill="%2394a3b8">LINE 1 TARGET</text><text x="165" y="180" font-family="monospace" font-size="18" font-weight="bold" fill="%23ffffff">1,400 UNITS</text><rect x="325" y="130" width="150" height="65" rx="6" fill="%231e293b"/><text x="340" y="155" font-family="sans-serif" font-size="11" fill="%2394a3b8">ACTUAL OUTPUT</text><text x="340" y="180" font-family="monospace" font-size="18" font-weight="bold" fill="%2310b981">1,385 (+99%)</text><rect x="500" y="130" width="150" height="65" rx="6" fill="%231e293b"/><text x="515" y="155" font-family="sans-serif" font-size="11" fill="%2394a3b8">DOWNTIME LOSS</text><text x="515" y="180" font-family="monospace" font-size="18" font-weight="bold" fill="%23f59e0b">18 MINS</text><rect x="150" y="215" width="500" height="110" rx="6" fill="%231e293b" fill-opacity="0.5"/><text x="170" y="245" font-family="monospace" font-size="13" font-weight="bold" fill="%2338bdf8">DAX STAR SCHEMA &amp; DRILL-THROUGH ARCHITECTURE</text></svg>',
    tags: ['Power BI', 'Reporting', 'Dashboards', 'Manufacturing', 'DAX'],
    keyTakeaways: [
      'Follow the 5-second rule: a plant supervisor should understand line status within 5 seconds of glancing at the screen.',
      'Star schema data modeling out-performs flat tables in DAX measure computation and query speed.',
      'Use drill-through navigation to link high-level shift summaries directly with machine downtime logs.',
      'Conditional formatting should only highlight deviations that demand physical intervention.',
    ],
    content: [
      'A common pitfall in Business Intelligence is building visually busy dashboards packed with twenty pie charts and dozens of overlapping filters. On a manufacturing shop floor, operators and plant heads have zero time for visual deciphering.',
      'When designing production dashboards in Power BI, I employ the 5-second rule: the top banner must immediately answer three questions: 1) What is our actual vs target output right now? 2) Which line is currently down or struggling? 3) What is our current rejection percentage?',
      'Under the hood, clean data modeling is paramount. Rather than importing a single giant denormalized table, I construct a classic Star Schema with a centralized Production_Fact table linked to Date_Dim, Machine_Dim, and Shift_Dim.',
      'Using DAX measures, we calculate dynamic Variance % = (Actual - Target) / Target, applying conditional indicators only when variance drops below -5%. By pairing high-level KPIs with a dedicated drill-through tab for downtime root causes, plant leaders can make immediate course corrections during the shift rather than analyzing the damage the next morning.',
    ],
  },
  {
    id: 'sap-excel-production-planning',
    title: 'The Synergy of SAP ERP and Advanced Excel in Precision Production Scheduling',
    slug: 'sap-excel-production-scheduling',
    category: 'Production Analytics',
    date: 'Jun 2026',
    readTime: '5 min read',
    excerpt:
      'Why SAP and Excel remain the undisputed powerhouse combination in modern manufacturing planning, and how to harness both for zero-delay operations.',
    author: 'Dhiraj Kumar Sharma',
    coverImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%"><defs><linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020617"/><stop offset="50%" stop-color="%230f172a"/><stop offset="100%" stop-color="%23172554"/></linearGradient></defs><rect width="800" height="450" fill="url(%23bg4)"/><rect x="140" y="110" width="230" height="230" rx="12" fill="%231e293b" stroke="%233b82f6" stroke-width="2"/><text x="255" y="160" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23ffffff" text-anchor="middle">SAP ERP</text><text x="255" y="190" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">MRP &amp; Master Data</text><text x="255" y="220" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">BOM Explosion</text><text x="255" y="250" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">Work Center Routing</text><text x="400" y="235" font-family="monospace" font-size="32" font-weight="bold" fill="%2360a5fa" text-anchor="middle">&#8644;</text><rect x="430" y="110" width="230" height="230" rx="12" fill="%231e293b" stroke="%2310b981" stroke-width="2"/><text x="545" y="160" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23ffffff" text-anchor="middle">EXCEL WHAT-IF</text><text x="545" y="190" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">Dynamic Arrays</text><text x="545" y="220" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">Shift Balancing</text><text x="545" y="250" font-family="monospace" font-size="12" fill="%2394a3b8" text-anchor="middle">Automated Power Query</text></svg>',
    tags: ['SAP', 'Production Planning', 'Excel', 'Operations', 'Supply Chain'],
    keyTakeaways: [
      'SAP provides enterprise data integrity, while Excel delivers agile, what-if planning flexibility.',
      'Power Query automates the extraction and transformation of SAP transaction dumps without manual copy-paste errors.',
      'Dynamic array formulas (XLOOKUP, FILTER) allow instant capacity simulation across shifting machine lines.',
      'Bridging ERP master data with shop-floor feedback loops prevents overproduction and raw material starvation.',
    ],
    content: [
      'Many technology commentators ask why modern factories still rely on Excel when enterprise ERP systems like SAP exist. The answer lies in complementary synergy.',
      'SAP ERP is the ultimate source of truth for bill of materials (BOM), work center routings, standard labor hours, and enterprise inventory. However, when daily emergencies occur — such as unexpected supplier delays, sudden machine breakdowns, or urgent client order escalations — Excel provides the agile sandbox needed for immediate replanning.',
      'At Pioneer, my workflow bridges these two systems. I export standard production orders and component stock levels from SAP, and process them through automated Power Query routines in Excel. There is zero manual copy-pasting.',
      'Within our Excel planning models, dynamic array formulas simulate what-if scenarios: if Line 2 goes down for 3 hours, how should we rebalance orders across Line 1 and Line 3 to preserve daily shipment targets? Once optimized, the revised schedule is re-committed to SAP. Mastering this synergy between rigorous ERP governance and agile analytical modeling is what defines high-efficiency production engineering.',
    ],
  },
];

