import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Site from './site';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Router from './router';

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="SMO're Tech"
      meta={[
        { name: 'description', content: 'Sonja Olson\'s personal wedsite, portfolio, blog, tutorials, and just cool $h!t' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, sonja olson' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
      ]}
    />
    <Header />
    <Content>
	  <Router />
    </Content>
    <Footer />
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
