import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rectangular Tedious Armadillo</title>
        <meta property="og:title" content="Rectangular Tedious Armadillo" />
      </Helmet>
    </div>
  )
}

export default Home
