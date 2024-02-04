import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Siba</h3>
            <p>Lenge Leve Vi</p>
            <p>Since 1689 </p>
          </div>
  
          <div className="footer-section links">
            <h3>Länkar</h3>
            <ul>
              <li><a href="/about">Om Oss</a></li>
              <li><a href="/contact">Kontakt</a></li>
              <li><NavLink to='/Shop'>Shop</NavLink></li>
              
            </ul>
          </div>
  
          <div className="footer-section social">
            <h3>Sociala Medier</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
             
            </ul>
          </div>
  
          <div className="footer-section contact">
            <h3>Kontakt</h3>
            <p><strong>Email:</strong> Siba@NoReply.com</p>
            <p><strong>Tel:</strong> -46 123 456 78</p>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Siba. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;