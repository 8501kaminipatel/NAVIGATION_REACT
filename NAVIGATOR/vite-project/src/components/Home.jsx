import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
    <div className="home-box">
      <h1 className="home-title">Welcome to the Product Management System</h1>
      <p className="home-description">
        Manage your product catalog with ease.
      </p>
      <Link to="/product" className="home-button">
        Go to Product Catalog
      </Link>
    </div>
  </div>
  )
}

export default Home