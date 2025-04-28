import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="list">
        <div className="list1">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>Login/Register</li>
            <li>My Wishlist</li>
            <li>My Orders</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className="list1">
          <h3>HELP & CONTACT</h3>
          <ul>
            <li>Contact</li>
            <li>Trade Enquiry</li>
            <li>FAQ</li>
            <li>Know Your True Size</li>
            <li>Return/Exchange</li>
          </ul>
        </div>
        <div className="list1">
          <h3>ABOUT</h3>
          <ul>
            <li>Company</li>
            <li>Our Faces</li>
            <li>Science of Comfort</li>
            <li>Haps Stories</li>
            <li>Stores Near Me</li>
          </ul>
        </div>
        <div className="list1">
          <h3>LEGAL</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Payment Methods</li>
            <li>Shipping & Return Policy</li>
          </ul>
        </div>
      </div>

      <div className="footline">
        <h2>FOLLOW US</h2>
      </div>

      <div className="icon">
        <img src="https://happenstance.com/themes/happenstance/images/facebook.webp" alt="Facebook" />
        <img src="https://happenstance.com/themes/happenstance/images/instagram.webp" alt="Instagram" />
        <img src="https://happenstance.com/themes/happenstance/images/pinterst.webp" alt="Pinterest" />
        <img src="https://happenstance.com/themes/happenstance/images/youtube.webp" alt="YouTube" />
        <img src="https://happenstance.com/themes/happenstance/images/twitter.webp" alt="Twitter" />
      </div>

      <p>Copyright © 2024. All rights reserved.</p>
      <p>Powered & Secured by: kamini.com</p>
    </div>
  );
};

export default Footer;
