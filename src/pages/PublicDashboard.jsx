import React, { useState } from "react";

// Demo lawyer data
const lawyerData = [
  {
    id: 1,
    name: 'Adv. Priya Sharma',
    specialization: 'Criminal Law',
    experience: 8,
    location: 'Delhi',
    rating: 4.9,
    reviews: 156,
    hourlyRate: 2500,
    avatar: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    languages: ['Hindi', 'English'],
    about: 'Experienced criminal lawyer with expertise in white-collar crimes and corporate fraud.',
    casesSolved: 234,
    successRate: 92,
  },
  {
    id: 2,
    name: 'Adv. Rajesh Kumar',
    specialization: 'Corporate Law',
    experience: 12,
    location: 'Mumbai',
    rating: 4.8,
    reviews: 203,
    hourlyRate: 3000,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    languages: ['English', 'Marathi'],
    about: 'Corporate law expert specializing in mergers, acquisitions, and compliance.',
    casesSolved: 187,
    successRate: 89,
  },
  {
    id: 3,
    name: 'Adv. Meera Patel',
    specialization: 'Family Law',
    experience: 6,
    location: 'Ahmedabad',
    rating: 4.7,
    reviews: 89,
    hourlyRate: 2000,
    avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    languages: ['Gujarati', 'Hindi', 'English'],
    about: 'Family law specialist with focus on divorce, custody, and matrimonial disputes.',
    casesSolved: 145,
    successRate: 88,
  },
  {
    id: 4,
    name: 'Adv. Suresh Reddy',
    specialization: 'Property Law',
    experience: 15,
    location: 'Hyderabad',
    rating: 4.6,
    reviews: 124,
    hourlyRate: 2800,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    verified: true,
    languages: ['Telugu', 'English'],
    about: 'Property law veteran with extensive experience in real estate transactions.',
    casesSolved: 298,
    successRate: 91,
  },
];

// Demo consultation data
const consultations = [
  {
    name: "Adv. Priya Sharma",
    specialization: "Criminal Law",
    type: "Initial Consultation",
    status: "Scheduled",
    date: "2024-01-20",
    time: "2:00 PM",
    duration: "45 minutes",
  },
  {
    name: "Adv. Rajesh Kumar",
    specialization: "Corporate Law",
    type: "Follow-up",
    status: "Completed",
    date: "2024-01-18",
    time: "10:30 AM",
    duration: "30 minutes",
  },
];

// Demo reviews data
const reviews = [
  {
    name: "Adv. Priya Sharma",
    specialization: "Criminal Law",
    avatar: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
    stars: 5,
    date: "January 15, 2024",
    text: "Excellent service! Very professional and helped me understand my legal options clearly. Would definitely recommend to others.",
  },
  {
    name: "Adv. Rajesh Kumar",
    specialization: "Corporate Law",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    stars: 5,
    date: "January 10, 2024",
    text: "Great expertise in corporate matters. Helped navigate complex merger documents efficiently. Highly recommended for business legal needs.",
  },
];

// Stat cards data
const stats = [
  {
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Available Lawyers",
    value: "1,247",
  },
  {
    color: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: "Cases Resolved",
    value: "12,456",
  },
  {
    color: "yellow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: "Average Rating",
    value: "4.7",
  },
  {
    color: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Avg Response",
    value: "2 hrs",
  },
];

const specializations = [
  "All Specializations",
  "Criminal Law",
  "Corporate Law",
  "Family Law",
  "Property Law",
];

const locations = [
  "All Locations",
  "Delhi",
  "Mumbai",
  "Ahmedabad",
  "Hyderabad",
];

function PublicDashboard() {
  const [activeTab, setActiveTab] = useState("find-lawyers");
  const [searchTerm, setSearchTerm] = useState("");
  const [specialization, setSpecialization] = useState("All Specializations");
  const [location, setLocation] = useState("All Locations");

  // Filter lawyers
  const filteredLawyers = lawyerData.filter((lawyer) => {
    const matchesSearch =
      lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization =
      specialization === "All Specializations" ||
      lawyer.specialization === specialization;
    const matchesLocation =
      location === "All Locations" || lawyer.location === location;
    return matchesSearch && matchesSpecialization && matchesLocation;
  });

  return (
    <div className="container">
      {/* HEADER */}
      <div className="header">
        <h1>
          <span role="img" aria-label="search">
            🔍
          </span>{" "}
          Find Legal Help
        </h1>
        <p>Connect with qualified lawyers for your legal needs</p>
      </div>

      {/* STATS GRID */}
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

      {/* MAIN CARD */}
      <div className="main-card">
        {/* TABS */}
        <div className="tabs">
          <div
            className={`tab${activeTab === "find-lawyers" ? " active" : ""}`}
            onClick={() => setActiveTab("find-lawyers")}
            data-tab="find-lawyers"
          >
            Find Lawyers
          </div>
          <div
            className={`tab${activeTab === "consultations" ? " active" : ""}`}
            onClick={() => setActiveTab("consultations")}
            data-tab="consultations"
          >
            Consultations
          </div>
          <div
            className={`tab${activeTab === "reviews" ? " active" : ""}`}
            onClick={() => setActiveTab("reviews")}
            data-tab="reviews"
          >
            Reviews
          </div>
        </div>

        {/* LAWYERS TAB CONTENT */}
        <div className={`tab-content${activeTab === "find-lawyers" ? " active" : ""}`}>
          <div className="search-section">
            <div className="search-grid">
              <div className="search-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search lawyers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <button className="btn btn-primary" onClick={() => {}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                Filter
              </button>
            </div>
          </div>
          <div className="lawyers-grid">
            {filteredLawyers.length === 0 ? (
              <div className="no-results">No lawyers found matching your criteria.</div>
            ) : (
              filteredLawyers.map((lawyer) => (
                <div className="lawyer-card" key={lawyer.id}>
                  <div className="lawyer-header">
                    <div className="lawyer-profile">
                      <img src={lawyer.avatar} alt={lawyer.name} className="lawyer-avatar"/>
                      <div>
                        <div className="lawyer-name">
                          {lawyer.name}
                          {lawyer.verified && (
                            <svg className="verified-badge" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                              <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                          )}
                        </div>
                        <div className="lawyer-specialization">{lawyer.specialization}</div>
                      </div>
                    </div>
                    <div className="rating">
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                      <span className="rating-value">{lawyer.rating}</span>
                    </div>
                  </div>
                  <div className="lawyer-details">
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {lawyer.location}
                    </div>
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                      {lawyer.experience} years experience
                    </div>
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      {lawyer.reviews} reviews
                    </div>
                  </div>
                  <p className="lawyer-about">{lawyer.about}</p>
                  <div className="lawyer-stats">
                    <div className="stat-item">
                      <div className="stat-label">Cases Won</div>
                      <div className="stat-value">{lawyer.casesSolved}</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-label">Success Rate</div>
                      <div className="stat-value">{lawyer.successRate}%</div>
                    </div>
                  </div>
                  <div className="lawyer-footer">
                    <div className="price">
                      <span className="price-amount">₹{lawyer.hourlyRate}</span>
                      <span className="price-unit">/hour</span>
                    </div>
                    <div className="action-buttons">
                      <button className="icon-btn" onClick={() => window.alert(`Message ${lawyer.name}`)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                      </button>
                      <button className="btn btn-primary" onClick={() => window.alert(`Consultation request sent to ${lawyer.name}. You will receive a confirmation email shortly.`)}>
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CONSULTATIONS TAB */}
        <div className={`tab-content${activeTab === "consultations" ? " active" : ""}`}>
          <div className="filter-section">
            <h3 className="section-title">My Consultations</h3>
            <select>
              <option>All Consultations</option>
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
          {consultations.map((c, idx) => (
            <div className="consultation-card" key={idx}>
              <div className="consultation-header">
                <div className="consultation-info">
                  <h4>{c.name}</h4>
                  <p>{c.specialization}</p>
                  <p style={{color: "var(--color-text)", fontSize: "var(--font-size-base)"}}>{c.type}</p>
                </div>
                <span className={`badge ${c.status.toLowerCase()}`}>{c.status}</span>
              </div>
              <div className="consultation-details">
                <div className="detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {c.date}
                </div>
                <div className="detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {c.time}
                </div>
                <div className="detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {c.duration}
                </div>
              </div>
              <div className="consultation-actions">
                <div className="text-links">
                  {c.status === "Scheduled" && (
                    <>
                      <button className="text-link" onClick={() => window.alert("Joining Meeting")}>Join Meeting</button>
                      <button className="text-link" onClick={() => window.alert("Rescheduling")}>Reschedule</button>
                    </>
                  )}
                  {c.status === "Completed" && (
                    <button className="text-link" onClick={() => window.alert("Leaving Review")}>Leave Review</button>
                  )}
                </div>
                <button className="icon-btn" onClick={() => window.alert("Message lawyer")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* REVIEWS TAB */}
        <div className={`tab-content${activeTab === "reviews" ? " active" : ""}`}>
          <div className="filter-section">
            <h3 className="section-title">My Reviews</h3>
            <button className="btn btn-primary" onClick={() => window.alert("Write Review")}>Write Review</button>
          </div>
          {reviews.map((r, idx) => (
            <div className="review-card" key={idx}>
              <div className="review-header">
                <div className="review-profile">
                  <img src={r.avatar} alt={r.name} className="review-avatar"/>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-category">{r.specialization}</div>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(r.stars)].map((_, i) => (
                    <svg viewBox="0 0 24 24" key={i}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-footer">
                <span>Posted on {r.date}</span>
                <button className="text-link" onClick={() => window.alert("Edit Review")}>Edit Review</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicDashboard;

