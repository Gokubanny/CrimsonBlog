import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h4>Weekly Newsletter</h4>
        <p>Get blog articles and offers via email</p>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-container">

        <div className="footer-about">
          <h1>🅱 MetaBlog</h1>
          <p><strong>Email:</strong> info@jstemplate.net</p>
          <p><strong>Phone:</strong> 880 123 456 789</p>
        </div>

        <div className="footer-links">
          <h4>Quick Link</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-category">
          <h4>Category</h4>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>

        <div className="footer-policies">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-meta">
          <span className="logo">🅱 MetaBlog</span>
          <p>© JS Template 2023. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer
