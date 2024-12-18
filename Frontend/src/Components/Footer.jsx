// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';
// import Logo from '../assets/doctors/Logo.png'; 

// export const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Email sent to: ' + email);
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-left">
//           <div className="footer-logo-title">
//             <img src={Logo} alt="Hospital Logo" className="footer-logo" />
//             <h1 className="footer-title">PulsePoint</h1>
//           </div>
//           <form className="footer-email-form" onSubmit={handleSubmit}>
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               value={email} 
//               onChange={handleEmailChange} 
//               className="footer-email-input"
//             />
//             <button type="submit" className="footer-email-btn">Contact</button>
//           </form>
//         </div>

//         <div className="footer-right">
//           <Link className="footer-link" to="/">Home</Link>
//           <Link className="footer-link" to="/Consultancy">Consultancy</Link>
//           <Link className="footer-link" to="/Medicines">Medicines</Link>
//           <Link className="footer-link" to="/Facilities">Our Team</Link>
//           <Link className="footer-link" to="/AboutUs">About Us</Link>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; 2024 PulsePoint. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; // Importing GitHub icon
import Logo from '../assets/doctors/Logo.png'; // Adjust the path to your logo

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email sent to: ' + email);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section (Logo + Title + Email) */}
        <div className="footer-left">
          <div className="footer-logo-title">
            <img src={Logo} alt="Hospital Logo" className="footer-logo" />
            <h1 className="footer-title">PulsePoint</h1>
          </div>
          <form className="footer-email-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={handleEmailChange} 
              className="footer-email-input"
            />
            <button type="submit" className="footer-email-btn">Contact</button>
          </form>

          {/* Social Media Icons Section */}
          <div className="footer-social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaGithub size={30} />
            </a>
          </div>

          {/* Contact Info Section */}
          <div className="footer-contact-info">
            <p>Phone: +91 1234567890</p>
            <p>Address: PulsePoint Office, Bangalore</p>
          </div>
        </div>

        {/* Right Section (Links) */}
        <div className="footer-right">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/Consultancy">Consultancy</Link>
          <Link className="footer-link" to="/HomeMedical">Medicines</Link>
          <Link className="footer-link" to="/Facilities">Our Team</Link>
          <Link className="footer-link" to="/AboutUs">About Us</Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 PulsePoint. All rights reserved.</p>
      </div>
    </footer>
  );
};

