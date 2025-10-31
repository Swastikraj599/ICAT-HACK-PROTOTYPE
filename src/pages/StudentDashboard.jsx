import React, { useState } from "react";

const stats = [
  {
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    label: "Study Materials",
    value: 156,
  },
  {
    color: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    label: "Tests Taken",
    value: 23,
  },
  {
    color: "yellow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
      </svg>
    ),
    label: "Average Score",
    value: "84%",
  },
  {
    color: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    label: "Study Hours",
    value: 127,
  },
];

const categories = [
  { icon: "⚖️", name: "Constitutional Law", count: 45 },
  { icon: "🔍", name: "Criminal Law", count: 38 },
  { icon: "📋", name: "Civil Law", count: 32 },
  { icon: "📄", name: "Contract Law", count: 28 },
  { icon: "🏠", name: "Property Law", count: 25 },
  { icon: "🏢", name: "Corporate Law", count: 22 },
];

const recentActivity = [
  {
    text: "Completed Constitutional Law Quiz",
    time: "2 hours ago",
    score: "85%",
  },
  {
    text: "Downloaded Criminal Law Notes",
    time: "1 day ago",
  },
  {
    text: "Started Contract Law Test",
    time: "2 days ago",
  },
];

const materials = [
  {
    title: "Constitutional Law - Fundamental Rights",
    badge: "PDF",
    category: "Constitutional Law",
    size: "2.5 MB",
    rating: 4.8,
    downloads: 1234,
    action: "Download PDF",
  },
  {
    title: "Criminal Law - IPC Sections",
    badge: "Video",
    category: "Criminal Law",
    size: "150 MB",
    rating: 4.6,
    downloads: 892,
    action: "Play Video",
  },
  {
    title: "Contract Law - Essential Elements",
    badge: "PDF",
    category: "Contract Law",
    size: "1.8 MB",
    rating: 4.7,
    downloads: 567,
    action: "Download PDF",
  },
];

const tests = [
  {
    title: "Constitutional Law Mock Test",
    category: "Constitutional Law",
    bestScore: "85%",
    questions: 50,
    duration: "1 hour",
    attempts: 3,
  },
  {
    title: "Criminal Law Practice Test",
    category: "Criminal Law",
    bestScore: "78%",
    questions: 40,
    duration: "45 minutes",
    attempts: 2,
  },
  {
    title: "Civil Law Assessment",
    category: "Civil Law",
    bestScore: "92%",
    questions: 35,
    duration: "40 minutes",
    attempts: 1,
  },
];

const performance = [
  {
    subject: "Constitutional Law",
    progress: 92,
  },
  {
    subject: "Criminal Law",
    progress: 85,
  },
  {
    subject: "Civil Law",
    progress: 78,
  },
  {
    subject: "Contract Law",
    progress: 71,
  },
];

const news = [
  {
    title: "Supreme Court Landmark Ruling on Digital Privacy Rights",
    summary:
      "In a historic judgment, the Supreme Court has established new precedents for digital privacy protection, affecting how tech companies handle user data.",
    category: "Constitutional Law",
    date: "16 Jan 2024",
    tags: ["Privacy", "Technology"],
  },
  {
    title: "New Amendment to Criminal Procedure Code Approved",
    summary:
      "Parliament has approved significant amendments to the Criminal Procedure Code, introducing faster trial mechanisms and enhanced victim protection.",
    category: "Criminal Law",
    date: "15 Jan 2024",
    tags: ["Criminal Law", "Amendment"],
  },
  {
    title: "Delhi High Court Verdict on Property Disputes",
    summary:
      "The Delhi High Court has delivered an important judgment clarifying the rights of property owners in cases of unauthorized constructions.",
    category: "Property Law",
    date: "14 Jan 2024",
    tags: ["Property", "High Court"],
  },
];

const legalSearchData = [
  {
    title: "Supreme Court Judgment on Digital Privacy Rights",
    type: "Judgment",
    summary:
      "Landmark judgment establishing digital privacy as a fundamental right under Article 21.",
    category: "Constitutional Law",
  },
  {
    title: "Criminal Procedure Code Amendment Act 2024",
    type: "Legislation",
    summary: "New amendments to CrPC introducing faster trial mechanisms.",
    category: "Criminal Law",
  },
  {
    title: "Delhi High Court Guidelines on Property Disputes",
    type: "Guidelines",
    summary: "Comprehensive guidelines for property disputes in Delhi.",
    category: "Property Law",
  },
];

const tabList = [
  "overview",
  "materials",
  "tests",
  "performance",
  "newsfeed",
  "legalsearch",
];

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [materialCat, setMaterialCat] = useState("All Categories");
  const [materialType, setMaterialType] = useState("All Types");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCat, setSearchCat] = useState("all");

  // Filtered search results preview
  const legalSearchFiltered =
    searchTerm || searchCat !== "all"
      ? legalSearchData.filter(
          (item) =>
            (searchTerm === "" ||
              item.title.toLowerCase().includes(searchTerm) ||
              item.summary.toLowerCase().includes(searchTerm)) &&
            (searchCat === "all" ||
              item.category.toLowerCase().includes(searchCat))
        )
      : legalSearchData;

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>
          <span role="img" aria-label="book">
            📖
          </span>{" "}
          Student Dashboard
        </h1>
        <p>Track your progress and access study materials</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-content">
              <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
              <div className="stat-info">
                <p>{stat.label}</p>
                <p>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Card with Tabs */}
      <div className="main-card">
        <div className="tabs">
          {tabList.map((tab) => (
            <div
              key={tab}
              className={`tab${activeTab === tab ? " active" : ""}`}
              onClick={() => setActiveTab(tab)}
              data-tab={tab}
            >
              {tab === "overview"
                ? "Overview"
                : tab === "materials"
                ? "Materials"
                : tab === "tests"
                ? "Tests"
                : tab === "performance"
                ? "Performance"
                : tab === "newsfeed"
                ? "Legal News Feed"
                : tab === "legalsearch"
                ? "Legal Search"
                : tab}
            </div>
          ))}
        </div>

        <div className={`tab-content${activeTab === "overview" ? " active" : ""}`}>
          {activeTab === "overview" && (
            <>
              <h3 className="section-title">Study Categories</h3>
              <div className="categories-grid">
                {categories.map((cat, idx) => (
                  <div
                    className="category-card"
                    key={idx}
                    onClick={() =>
                      window.alert(`Opening ${cat.name} materials...`)
                    }
                  >
                    <div className="category-content">
                      <span className="category-icon">{cat.icon}</span>
                      <div>
                        <div className="category-name">{cat.name}</div>
                        <div className="category-count">
                          {cat.count} materials
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="section-title">Recent Activity</h3>
              <div className="activity-list">
                {recentActivity.map((act, j) => (
                  <div className="activity-item" key={j}>
                    <div className="activity-left">
                      <div className="activity-dot"></div>
                      <div>
                        <div className="activity-text">{act.text}</div>
                        <div className="activity-time">{act.time}</div>
                      </div>
                    </div>
                    {act.score && (
                      <span className="activity-score">{act.score}</span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className={`tab-content${activeTab === "materials" ? " active" : ""}`}>
          {activeTab === "materials" && (
            <>
              <div className="filter-section">
                <h3 className="section-title">Study Materials</h3>
                <div className="filter-controls">
                  <select
                    value={materialCat}
                    onChange={(e) => setMaterialCat(e.target.value)}
                  >
                    <option>All Categories</option>
                    <option>Constitutional Law</option>
                    <option>Criminal Law</option>
                    <option>Civil Law</option>
                  </select>
                  <select
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                  >
                    <option>All Types</option>
                    <option>PDF</option>
                    <option>Video</option>
                    <option>Audio</option>
                  </select>
                </div>
              </div>
              <div className="materials-grid">
                {materials.map((mat, idx) => (
                  <div className="material-card" key={idx}>
                    <div className="material-header">
                      <div className="material-title">{mat.title}</div>
                      <span className="material-badge">{mat.badge}</span>
                    </div>
                    <div className="material-category">{mat.category}</div>
                    <div className="material-meta">
                      <span>{mat.size}</span>
                      <div className="material-rating">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>{mat.rating}</span>
                      </div>
                    </div>
                    <div className="material-footer">
                      <span className="material-downloads">
                        {mat.downloads} downloads
                      </span>
                      <button
                        className="icon-btn"
                        onClick={() =>
                          window.alert(
                            mat.action === "Download PDF"
                              ? "Downloading PDF..."
                              : "Playing video..."
                          )
                        }
                      >
                        {mat.badge === "PDF" ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            width="16"
                            height="16"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            width="16"
                            height="16"
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className={`tab-content${activeTab === "tests" ? " active" : ""}`}>
          {activeTab === "tests" && (
            <>
              <div className="filter-section">
                <h3 className="section-title">Mock Tests</h3>
                <button
                  className="btn btn-primary"
                  style={{ width: "auto" }}
                  onClick={() =>
                    window.alert("Starting new test...")
                  }
                >
                  Take New Test
                </button>
              </div>
              <div className="tests-grid">
                {tests.map((test, idx) => (
                  <div className="test-card" key={idx}>
                    <div className="test-header">
                      <div>
                        <div className="test-title">{test.title}</div>
                        <div className="test-category">{test.category}</div>
                      </div>
                      <span className="test-score-badge">
                        Best: {test.bestScore}
                      </span>
                    </div>
                    <div className="test-details">
                      <div>
                        <span className="test-detail-label">Questions:</span>{" "}
                        {test.questions}
                      </div>
                      <div>
                        <span className="test-detail-label">Duration:</span>{" "}
                        {test.duration}
                      </div>
                      <div>
                        <span className="test-detail-label">Attempts:</span>{" "}
                        {test.attempts}
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => window.alert("Starting test...")}
                    >
                      Start Test
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className={`tab-content${activeTab === "performance" ? " active" : ""}`}>
          {activeTab === "performance" && (
            <>
              <h3 className="section-title">Performance Analytics</h3>
              <div className="performance-grid">
                <div className="performance-card">
                  <h4 className="performance-title">Score Trends</h4>
                  <div className="chart-placeholder">
                    <p>📊 Performance chart visualization</p>
                  </div>
                </div>
                <div className="performance-card">
                  <h4 className="performance-title">Subject Strengths</h4>
                  <div className="subject-list">
                    {performance.map((subj, idx) => (
                      <div className="subject-item" key={idx}>
                        <span className="subject-name">{subj.subject}</span>
                        <div className="subject-progress">
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: `${subj.progress}%` }}
                            ></div>
                          </div>
                          <span className="progress-value">
                            {subj.progress}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={`tab-content${activeTab === "newsfeed" ? " active" : ""}`}>
          {activeTab === "newsfeed" && (
            <>
              <h3 className="section-title">Legal News Feed</h3>
              <div className="news-list">
                {news.map((item, idx) => (
                  <div className="news-item" key={idx}>
                    <div className="news-title">{item.title}</div>
                    <div className="news-summary">{item.summary}</div>
                    <div className="news-meta">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <div className="news-tags">
                      {item.tags.map((tag, i2) => (
                        <span className="news-tag" key={i2}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="see-all-link"
                onClick={() => window.alert("Open full news feed page")}
              >
                See all news &rarr;
              </div>
            </>
          )}
        </div>
        <div className={`tab-content${activeTab === "legalsearch" ? " active" : ""}`}>
          {activeTab === "legalsearch" && (
            <>
              <h3 className="section-title">Legal Search</h3>
              <form
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
                autoComplete="off"
              >
                <input
                  type="text"
                  placeholder="Search legal documents, cases, laws..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                />
                <select
                  value={searchCat}
                  onChange={(e) => setSearchCat(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="constitutional">Constitutional Law</option>
                  <option value="criminal">Criminal Law</option>
                  <option value="civil">Civil Law</option>
                  <option value="property">Property Law</option>
                  <option value="tax">Tax Law</option>
                  <option value="labor">Labor Law</option>
                  <option value="environmental">Environmental Law</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                </select>
              </form>
              <div className="search-results-preview">
                {legalSearchFiltered.slice(0, 3).map((res, idx) => (
                  <div className="search-result" key={idx}>
                    <span className="search-type-badge">{res.type}</span>
                    <span className="search-title">{res.title}</span>
                    <div className="search-summary">{res.summary}</div>
                    <div className="search-meta">{res.category}</div>
                  </div>
                ))}
              </div>
              <div
                className="see-all-link"
                onClick={() => window.alert("Open full legal search page")}
              >
                See full search &rarr;
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
