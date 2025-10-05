import Head from "next/head";
import Script from "next/script";
import Styles from "./page.module.css";
import Link from 'next/link';
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Brain Booster Academy",
    "description": "Premium educational academy offering personalized learning courses",
    "url": "https://brainboosteracademy.com"
  };
  return (
    <>
      <Head>
        <title>Brain Booster Academy - Premium Education & Learning Courses</title>
        <meta
          name="description"
          content="Expert-led courses in Mathematics, Science, Language Arts, and Coding. Personalized learning with certified tutors."
        />
        {/*  Google Analytics Scripts */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QYYWXRL1SX"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QYYWXRL1SX');
        `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      />
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3 text-primary mb-0" href="/">Brain Booster Academy</Link>
          <button className={`navbar-toggler border-0 ${Styles.noBorder}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2"><a className="nav-link fw-semibold" href="#home">Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link fw-semibold" href="#about">About</a></li>
              <li className="nav-item mx-2"><a className="nav-link fw-semibold" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className={`text-white ${Styles.marginTop}`} style={{}}>
        <div className={`container  d-flex flex-column justify-content-center`}>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner rounded shadow-sm">
                  <div className="carousel-item active">
                    <img
                      src="1.jpeg"
                      className="d-block w-100 img-fluid rounded shadow-sm"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="2.jpeg"
                      className="d-block w-100 img-fluid rounded shadow-sm"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="11.jpeg"
                      className="d-block w-100 img-fluid rounded shadow-sm"
                      alt="Slide 3"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="5.jpeg"
                      className="d-block w-100 img-fluid rounded shadow-sm"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="text-center display-5 fw-bold mb-5 text-dark">Why Choose Us</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="fs-1 text-primary mb-3">🎯</div>
                <h5 className="fw-bold">Personalized Learning</h5>
                <p className="text-muted">Custom study plans tailored to your learning style and goals</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="fs-1 text-primary mb-3">👨‍🏫</div>
                <h5 className="fw-bold">Expert Tutors</h5>
                <p className="text-muted">Learn from certified educators with proven success records</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="fs-1 text-primary mb-3">📊</div>
                <h5 className="fw-bold">Progress Tracking</h5>
                <p className="text-muted">Monitor improvements with detailed analytics and reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4 text-dark">About Our Academy</h2>
              <p className="lead text-muted mb-4">
                Brain Booster Academy empowers students to reach their full potential through quality education.
                With years of experience, we've helped thousands achieve academic success.
              </p>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">✅ 10,000+ Students</li>
                    <li className="mb-2">✅ 95% Success Rate</li>
                    <li className="mb-2">✅ 50+ Tutors</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">✅ 24/7 Support</li>
                    <li className="mb-2">✅ Personalized Plans</li>
                    <li className="mb-2">✅ Progress Reports</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="21.jpeg"
                alt="Our Learning Center"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container py-4">
          <h2 className="text-center display-5 fw-bold mb-5 text-dark">Contact Us</h2>
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="bg-light p-4 rounded h-100">
                <h4 className="fw-bold mb-4">Get In Touch</h4>
                <div className="mb-3">
                  <p className="fw-semibold mb-1">📧 Email</p>
                  <p className="text-muted mb-3">gurukripa.ashok.2019@gmail.com</p>
                </div>
                <div className="mb-3">
                  <p className="fw-semibold mb-1">📞 Phone</p>
                  <p className="text-muted mb-3">+91 95656 86354</p>
                </div>
                <div className="mb-4">
                  <p className="fw-semibold mb-1">📍 Address</p>
                  <p className="text-muted">Ali Building First floor, Gali No. 6, Colony-Munshi Pura, Sahadat Paru Road, Mau - 275201</p>
                </div>
                <div>
                  <h6 className="fw-bold">Business Hours</h6>
                  <p className="text-muted mb-1">Mon-Fri: 8AM-8PM</p>
                  <p className="text-muted mb-0">Sat-Sun: 9AM-5PM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="bg-white p-4 rounded shadow-sm">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control form-control-lg" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control form-control-lg" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg px-4">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h5 className="fw-bold text-warning mb-3">Brain Booster Academy</h5>
              <p className="text-light opacity-75">Empowering minds through quality education and personalized learning experiences.</p>
            </div>
            <div className="col-lg-6">
              <div className="row ">
                <div className="col-lg-6 col-6">
                  <h6 className="fw-bold mb-3">Connect</h6>
                  <div className="d-flex flex-column">
                    <a href="#" className="text-light opacity-75 text-decoration-none mb-2">Facebook</a>
                    <a href="#" className="text-light opacity-75 text-decoration-none mb-2">Twitter</a>
                    <a href="#" className="text-light opacity-75 text-decoration-none mb-2">Instagram</a>
                    <a href="#" className="text-light opacity-75 text-decoration-none">LinkedIn</a>
                  </div>
                </div>
                <div className="col-lg-6 col-6">
                  <h6 className="fw-bold mb-3">Quick Links</h6>
                  <div className="d-flex flex-column">
                    <a href="#home" className="text-light opacity-75 text-decoration-none mb-2">Home</a>
                    <a href="#about" className="text-light opacity-75 text-decoration-none mb-2">About</a>
                    <a href="#contact" className="text-light opacity-75 text-decoration-none">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 bg-light opacity-25" />
          <div className="text-center">
            <p className="mb-0 text-light opacity-75">&copy; 2024 Brain Booster Academy. All rights reserved.</p>
          </div>
        </div>
        <a
          href="https://wa.me/919565686354?text=Hello%20I%20want%20to%20know%20more%20about%20your%20courses"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.whatsappFloat}
        >
          <img
            src="/whatsapp-icon.png"
            alt="Chat on WhatsApp"
            width="60"
            height="60"
          />
        </a>
      </footer>
    </>
  );
}