import React from 'react'
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="w-100 text-white py-1 mt-5 text-center fw-semibold fs-4 d-flex flex-column align-items-center">
      <img src="images/footer-icon.webp" alt="ninja" className="logo" />
      <span className="fs-6 text-muted">A.E</span>
    </footer>
  )
}

export default Footer;
