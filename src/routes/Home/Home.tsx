import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <>
      <section className="banner">
        <div className="banner__content">
          <h1 className="banner__title">Master Your Adventures</h1>
          <p className="banner__subtext">
            The ultimate D&D campaign management tool for Dungeon Masters and
            players. Create, manage, and bring your campaigns to life with
            powerful tools and an intuitive interface.
          </p>
          <div className="btn__group">
            <button className="btn">Start Your Campaign</button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="section-header-center">
          <h1>Everything You Need to Run Immersive Campaigns</h1>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">X</span>
            <h3>Campaign Management</h3>
            <p>
              Organize your campaigns, sessions, and story arcs with powerful
              management tools. Track NPCs, locations, and plot threads
              effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">X</span>
            <h3>Campaign Management</h3>
            <p>
              Organize your campaigns, sessions, and story arcs with powerful
              management tools. Track NPCs, locations, and plot threads
              effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">X</span>
            <h3>Campaign Management</h3>
            <p>
              Organize your campaigns, sessions, and story arcs with powerful
              management tools. Track NPCs, locations, and plot threads
              effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">X</span>
            <h3>Campaign Management</h3>
            <p>
              Organize your campaigns, sessions, and story arcs with powerful
              management tools. Track NPCs, locations, and plot threads
              effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">X</span>
            <h3>Campaign Management</h3>
            <p>
              Organize your campaigns, sessions, and story arcs with powerful
              management tools. Track NPCs, locations, and plot threads
              effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">X</span>
            <h3>Campaign Management</h3>
            <p>
              Organize your campaigns, sessions, and story arcs with powerful
              management tools. Track NPCs, locations, and plot threads
              effortlessly.
            </p>
          </div>
        </div>
        {/* <div className="section-header-"></div> */}
      </section>
      <section className="container">
        <div className="stat-container">
          <div className="stat-item">
            <h2>50K+</h2>
            <p>Active Campaigns</p>
          </div>
          <div className="stat-item">
            <h2>200K+</h2>
            <p>Players</p>
          </div>
          <div className="stat-item">
            <h2>1M+</h2>
            <p>Sessions Played</p>
          </div>
          <div className="stat-item">
            <h2>98%</h2>
            <p>User Satisfaction</p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="section-header-center">
          <h2>Ready to Begin Your Quest?</h2>
        </div>
        <div className="section-body-center">
          <div className="cta-container">
            <p>
              Join thousands of Dungeon Masters and players who've transformed
              their D&D experience with DungeonsForge.
            </p>
          </div>
          <button className="btn">Create Free Account</button>
        </div>
      </section>
    </>
  );
}
