import React, { useState } from "react";

const stats = [
  { color: "blue", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ), label: "Active Clients", value: 24
  },
  { color: "green", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ), label: "Cases Won", value: 187
  },
  { color: "yellow", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ), label: "Rating", value: 4.8
  },
  { color: "purple", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ), label: "This Month", value: "₹72,000"
  }
];

const tabNames = [
  "overview", "requests", "appointments", "cases", "earnings", "newsfeed", "legalsearch"
];

// Sample data for overview, requests, appointments, cases, earnings, news, and search
const clientRequests = [
  { name: "Rishi Mhatre", type: "Property dispute", urgency: "High", date: "2024-01-15" },
  { name: "Vijay Kapoor", type: "Divorce proceedings", urgency: "Medium", date: "2024-01-14" },
  { name: "Mihir Shastri", type: "Contract review", urgency: "Low", date: "2024-01-13" }
];

const upcomingAppointments = [
  { name: "Mahesh Ahuja", type: "Initial Consultation", date: "2024-01-18", time: "10:00 AM (1 hour)", status: "Confirmed" },
  { name: "Ravi Kumar", type: "Case Review", date: "2024-01-18", time: "2:00 PM (45 minutes)", status: "Pending" },
  { name: "Rohit Singh", type: "Final Discussion", date: "2024-01-19", time: "11:30 AM (30 minutes)", status: "Confirmed" }
];

const news = [
  { title: "Supreme Court Landmark Ruling on Digital Privacy Rights", summary: "In a historic judgment, the Supreme Court has established new precedents for digital privacy protection, affecting how tech companies handle user data.", category: "Constitutional Law", date: "16 Jan 2024", tags: ["Privacy", "Technology"] },
  { title: "New Amendment to Criminal Procedure Code Approved", summary: "Parliament has approved significant amendments to the Criminal Procedure Code, introducing faster trial mechanisms and enhanced victim protection.", category: "Criminal Law", date: "15 Jan 2024", tags: ["Criminal Law", "Amendment"] },
  { title: "Delhi High Court Verdict on Property Disputes", summary: "The Delhi High Court has delivered an important judgment clarifying the rights of property owners in cases of unauthorized constructions.", category: "Property Law", date: "14 Jan 2024", tags: ["Property", "High Court"] },
];

const legalSearchData = [
  { title: "Supreme Court Judgment on Digital Privacy Rights", type: "Judgment", summary: "Landmark judgment establishing digital privacy as a fundamental right under Article 21.", category: "Constitutional Law" },
  { title: "Criminal Procedure Code Amendment Act 2024", type: "Legislation", summary: "New amendments to CrPC introducing faster trial mechanisms.", category: "Criminal Law" },
  { title: "Delhi High Court Guidelines on Property Disputes", type: "Guidelines", summary: "Comprehensive guidelines for property disputes in Delhi.", category: "Property Law" }
];

// Requests, cases, appointments, earnings, filter data (usually from API, examples below)
const requests = [
  { name: "John Doe", email: "john@example.com", type: "Property dispute", urgency: "High", status: "Pending", date: "2024-01-15" },
  { name: "Jane Smith", email: "jane@example.com", type: "Divorce proceedings", urgency: "Medium", status: "Pending", date: "2024-01-14" },
  { name: "Mihir Shastri", email: "mihir@example.com", type: "Contract review", urgency: "Low", status: "Accepted", date: "2024-01-13" }
];

const appointments = [
  { name: "Sarah Wilson", type: "Initial Consultation", date: "2024-01-18", time: "10:00 AM (1 hour)", status: "Confirmed" },
  { name: "Ravi Kumar", type: "Case Review", date: "2024-01-18", time: "2:00 PM (45 minutes)", status: "Pending" },
  { name: "Emily Davis", type: "Final Discussion", date: "2024-01-19", time: "11:30 AM (30 minutes)", status: "Confirmed" }
];

const cases = [
  { title: "Property Dispute - ABC vs XYZ", client: "ABC Corporation", updated: "2024-01-15", status: "In Progress", priority: "High" },
  { title: "Contract Review - Tech Startup", client: "Tech Innovations Ltd.", updated: "2024-01-12", status: "Completed", priority: "Medium" },
  { title: "Employment Law - Worker Rights", client: "John Employee", updated: "2024-01-10", status: "Under Review", priority: "Low" }
];

const earningsOverview = [
  { title: "Total Earnings", amount: "₹3,40,000", change: "+12% from last period" },
  { title: "This Month", amount: "₹72,000", change: "+8% from last month", className: "green" },
  { title: "Average/Month", amount: "₹56,667", change: "6 months average", className: "purple" }
];

const monthlyBreakdown = [
  { month: "Jan", percent: 56, amount: "₹45,000" },
  { month: "Feb", percent: 65, amount: "₹52,000" },
  { month: "Mar", percent: 60, amount: "₹48,000" },
  { month: "Apr", percent: 72, amount: "₹58,000" },
  { month: "May", percent: 81, amount: "₹65,000" },
  { month: "Jun", percent: 90, amount: "₹72,000" }
];

function LawyerDashboard() {
  const [tab, setTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCat, setSearchCat] = useState("all");

  // Legal Search Filter
  const legalSearchFiltered = legalSearchData.filter(item =>
    (searchTerm === "" || item.title.toLowerCase().includes(searchTerm) || item.summary.toLowerCase().includes(searchTerm)) &&
    (searchCat === "all" || item.category.toLowerCase().includes(searchCat))
  );

  return (
    <div className="container">
      {/* Header Card */}
      <div className="header-card">
        <div className="header-content">
          <div className="header-title">
            <h1>⚖️ Lawyer Dashboard</h1>
            <p>Manage your practice and clients</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => alert('New case functionality')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              New Case
            </button>
            <button className="btn btn-secondary" onClick={() => alert('Edit profile functionality')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8 }}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
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
      {/* Main Card Tabs */}
      <div className="main-card">
        {/* Tabs */}
        <div className="tabs">
          {tabNames.map(name => (
            <div key={name} className={`tab${tab === name ? " active" : ""}`} onClick={() => setTab(name)}>
              {name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}
            </div>
          ))}
        </div>
        {/* Overview */}
        {tab === "overview" && (
          <div className="tab-content active">
            <div className="content-grid">
              {/* Recent Client Requests */}
              <div>
                <h3 className="section-title">Recent Client Requests</h3>
                <div className="card-list">
                  {clientRequests.map(req => (
                    <div className="request-card" key={req.name}>
                      <div className="card-header">
                        <div>
                          <div className="card-title">{req.name}</div>
                          <div className="card-subtitle">{req.type}</div>
                        </div>
                        <span className={`badge ${req.urgency.toLowerCase()}`}>{req.urgency}</span>
                      </div>
                      <div className="card-footer">
                        <span className="card-date">{req.date}</span>
                        <div className="action-buttons">
                          <button className="icon-btn accept" onClick={() => alert("Request accepted! Client will be notified.")}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          </button>
                          <button className="icon-btn decline" onClick={() => alert("Request declined. Client will be notified.")}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Upcoming Appointments */}
              <div>
                <h3 className="section-title">Upcoming Appointments</h3>
                <div className="card-list">
                  {upcomingAppointments.map(a => (
                    <div className="appointment-card" key={a.name}>
                      <div className="card-header">
                        <div>
                          <div className="card-title">{a.name}</div>
                          <div className="card-subtitle">{a.type}</div>
                        </div>
                        <span className={`badge ${a.status.toLowerCase()}`}>{a.status}</span>
                      </div>
                      <div className="appointment-info">
                        <div className="info-row">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {a.date}
                        </div>
                        <div className="info-row">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {a.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Requests */}
        {tab === "requests" && (
          <div className="tab-content active">
            <div className="filter-section">
              <h3 className="section-title" style={{ marginBottom: 0 }}>Client Requests</h3>
              <div className="filter-controls">
                <select><option>All Requests</option><option>Pending</option><option>Accepted</option><option>Declined</option></select>
                <select><option>All Urgency</option><option>High</option><option>Medium</option><option>Low</option></select>
              </div>
            </div>
            {requests.map(r => (
              <div className="full-request-card" key={r.name}>
                <div className="request-header">
                  <div className="request-info" style={{flex: 1}}>
                    <h4>{r.name}</h4>
                    <p>{r.email}</p>
                    <p style={{color: "var(--color-text)", fontSize: "var(--font-size-base)"}}>{r.type}</p>
                  </div>
                  <div style={{textAlign: "right"}}>
                    <span className={`badge ${r.urgency.toLowerCase()}`} style={{display: "block", marginBottom: 8}}>{r.urgency}</span>
                    <p className="card-date">{r.date}</p>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <span className={`badge ${r.status.toLowerCase()}`}>{r.status}</span>
                  <div className="request-actions">
                    <button className="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                    <button className="btn-action btn-accept" onClick={() => alert("Request accepted! Client will be notified.")}>Accept</button>
                    <button className="btn-action btn-decline" onClick={() => alert("Request declined. Client will be notified.")}>Decline</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Appointments */}
        {tab === "appointments" && (
          <div className="tab-content active">
            <div className="filter-section">
              <h3 className="section-title" style={{marginBottom: 0}}>Appointments</h3>
              <button className="btn btn-primary">Schedule New</button>
            </div>
            <div className="appointment-grid">
              {appointments.map(a => (
                <div className="appointment-card" key={a.name}>
                  <div className="card-header">
                    <div>
                      <div className="card-title">{a.name}</div>
                      <div className="card-subtitle">{a.type}</div>
                    </div>
                    <span className={`badge ${a.status.toLowerCase()}`}>{a.status}</span>
                  </div>
                  <div className="appointment-info">
                    <div className="info-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {a.date}
                    </div>
                    <div className="info-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {a.time}
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="btn btn-primary btn-full" onClick={() => alert("Join Meeting")}>Join Meeting</button>
                    <button className="icon-btn"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Cases */}
        {tab === "cases" && (
          <div className="tab-content active">
            <div className="filter-section">
              <h3 className="section-title" style={{marginBottom: 0}}>Recent Cases</h3>
              <div className="filter-controls">
                <select><option>All Cases</option><option>In Progress</option><option>Completed</option><option>Under Review</option></select>
                <select><option>All Priority</option><option>High</option><option>Medium</option><option>Low</option></select>
              </div>
            </div>
            {cases.map(c => (
              <div className="full-request-card" key={c.title}>
                <div className="request-header">
                  <div className="request-info" style={{flex: 1}}>
                    <h4>{c.title}</h4>
                    <p>Client: {c.client}</p>
                    <p style={{fontSize: 11, color: "var(--color-text-secondary)"}}>Last updated: {c.updated}</p>
                  </div>
                  <div style={{textAlign: "right"}}>
                    <span className={`badge ${c.status.replace(" ", "-").toLowerCase()}`} style={{display: "block", marginBottom: 8}}>{c.status}</span>
                    <p className="card-date">{c.priority} Priority</p>
                  </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div style={{display: "flex", gap: 16}}>
                    <button className="btn-action" style={{background: "transparent", color: "var(--color-primary)"}}>View Details</button>
                    <button className="btn-action" style={{background: "transparent", color: "var(--color-text-secondary)"}}>Add Note</button>
                  </div>
                  <button className="btn btn-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: 4}}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Earnings */}
        {tab === "earnings" && (
          <div className="tab-content active">
            <div className="filter-section">
              <h3 className="section-title" style={{marginBottom: 0}}>Earnings Overview</h3>
              <select><option>Last 6 Months</option><option>This Year</option><option>Last Year</option></select>
            </div>
            <div className="earnings-grid">
              {earningsOverview.map(e => (
                <div className={`earning-card${e.className ? " " + e.className : ""}`} key={e.title}>
                  <h4 className="earning-title">{e.title}</h4>
                  <p className="earning-amount">{e.amount}</p>
                  <p className="earning-change">{e.change}</p>
                </div>
              ))}
            </div>
            <div className="earnings-breakdown">
              <h4 className="breakdown-title">Monthly Breakdown</h4>
              <div className="breakdown-list">
                {monthlyBreakdown.map(b => (
                  <div className="breakdown-item" key={b.month}>
                    <span className="breakdown-month">{b.month}</span>
                    <div className="breakdown-bar-container">
                      <div className="progress-bar"><div className="progress-fill" style={{width: `${b.percent}%`}}></div></div>
                      <span className="breakdown-amount">{b.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* News Feed */}
        {tab === "newsfeed" && (
          <div className="tab-content active">
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
                    {item.tags.map(tag => <span className="news-tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="see-all-link" onClick={() => alert('Open full news feed page')}>See all news &rarr;</div>
          </div>
        )}
        {/* Legal Search */}
        {tab === "legalsearch" && (
          <div className="tab-content active">
            <h3 className="section-title">Legal Search</h3>
            <form className="search-form" onSubmit={e => e.preventDefault()} autoComplete="off">
              <input type="text" placeholder="Search legal documents, cases, laws..." value={searchTerm} onChange={e => setSearchTerm(e.target.value.toLowerCase())}/>
              <select value={searchCat} onChange={e => setSearchCat(e.target.value)}>
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
              {legalSearchFiltered.length === 0 ? (
                <p style={{color: "var(--color-text-secondary)", padding: 20, textAlign: "center"}}>No results found</p>
              ) : (
                legalSearchFiltered.slice(0, 3).map((res, idx) => (
                  <div className="search-result" key={idx}>
                    <span className="search-type-badge">{res.type}</span>
                    <div className="search-title">{res.title}</div>
                    <div className="search-summary">{res.summary}</div>
                    <div className="search-meta">{res.category}</div>
                  </div>
                ))
              )}
            </div>
            <div className="see-all-link" onClick={() => alert('Open full legal search page')}>See full search &rarr;</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyerDashboard;
