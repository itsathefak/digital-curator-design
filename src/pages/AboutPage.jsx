import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="animate-title">Digital Curator</h1>
        </div>
      </header>

      <main className="main-content">
  <section className="intro">
    <p className="intro-text">
      Explore the art collections of Central European museums and search for artworks based on specific motifs.
    </p>
    <div className="intro-collage">
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-17.jpeg" alt="Art 1" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-18.jpeg" alt="Art 2" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-19.jpeg" alt="Art 3" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-20.jpeg" alt="Art 4" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-21.jpeg" alt="Art 5" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-22.jpeg" alt="Art 6" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-23.jpeg" alt="Art 7" />
      <img src="https://digitalcurator.art/static/images/intro/intro-pic-24.jpeg" alt="Art 8" />
    </div>
  </section>


        <hr className="separator" />

        <section className="discover-art">
          <div className="discover-art-content">
            <h2>Discover Art Through Time</h2>
            <p>
              Users of the application can build their combination of objects and reveal how often the subject has occurred
              across the centuries, view graphics, drawings, or paintings that represent it in different epochs, and compare
              data with other themes.
            </p>
          </div>
          <div className="discover-art-image">
            <img src="https://digitalcurator.art/static/images/intro/intro-pic-13.jpeg" alt="Timeline visualization of art motifs" />
          </div>
        </section>

        <section className="quantitative-view">
          <h2>Quantitative View of Cultural History</h2>
          <p>
            The Digital Curator offers a quantitative view of cultural history based on the frequency of symbols and
            iconographic themes in many artifacts, not on a detailed observation of individual items. This distant viewing
            can be especially useful for exploring genres, understanding overall social conditions, and interpreting
            political situations across time periods.
          </p>
        </section>

        <section className="features">
          {['Cultural Influence', 'Canon Issues', 'Motif Migration'].map((feature, index) => (
            <div key={feature} className="feature-card">
              <h3>{feature}</h3>
              <p>{getFeatureDescription(feature)}</p>
            </div>
          ))}
        </section>

        <section className="database-stats">
          <h2>Database Statistics</h2>
          <div className="stats-grid">
            {[
              { number: '196,116', label: 'Total Works' },
              { number: '91', label: 'Museums' },
              { number: '71,410', label: 'Open License Works' },
              { number: '4', label: 'Countries' }
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="technical-implementation">
  <div className="tech-image">
    <img src="https://digitalcurator.art/static/images/intro/intro-pic-16.jpeg" alt="Diagram of Digital Curator's technical architecture" />
  </div>
  <div className="tech-content">
    <h2>Technical Implementation</h2>
    <p>
      The AI library for machine learning TensorFlow and the computer service Google Cloud, including the tool
      Google Cloud Vision, were used for the automatic detection of depicted motifs. Data search and storage is
      performed using the ElasticSearch database, and the operation of the application is provided by the Google
      App Engine service.
    </p>
  </div>
</section>



        <section className="acknowledgments">
          <h2>Acknowledgments</h2>
          <p>
            Implementation was carried out with the kind support of the UMPRUM, Academy of Arts, Architecture and Design
            in Prague, the Ministry of Education of the Czech Republic, the Slovak National Gallery, and the BlueGhost
            digital agency. Thanks also go to many museums that made it possible to use their digitized collections, and
            to Richard Prajer, Radim Hašek, and Eva Škvárová who helped with the development of the application and the
            preparation of the database.
          </p>
          <div className="org-list">
  <img src="https://digitalcurator.art/static/images/logo-umprum.svg" alt="UMPRUM" />
  <img src="https://digitalcurator.art/static/images/logo-sng.svg" alt="Slovak National Gallery" />
  <img src="https://digitalcurator.art/static/images/logo-msmt.svg" alt="Ministry of Education CR" />
  <img src="https://digitalcurator.art/static/images/logo-blueghost.svg" alt="BlueGhost" />
</div>



        </section>
      </main>

      <footer className="page-footer">
        <p>The project was designed by Lukas Pilka in 2019-22.</p>
      </footer>
    </div>
  );
};

const getFeatureDescription = (feature) => {
  switch (feature) {
    case 'Cultural Influence':
      return 'Gain insights into cultural and economic influences across regions and time periods.';
    case 'Canon Issues':
      return 'Explore the relationship between canonical works and lesser-known pieces in art history.';
    case 'Motif Migration':
      return 'Observe how motifs migrate and evolve across centuries and distant regions.';
    default:
      return '';
  }
};

export default AboutPage;
