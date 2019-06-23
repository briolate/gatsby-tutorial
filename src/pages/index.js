import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Info from '../components/info';

import { Button } from '../components/Button';
import { FaApple } from 'react-icons/fa';
import PicAlt from '../components/picAlt';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products">
      <h1>Products page</h1>
    </Link>
    <Info />
    <PicAlt />
    <Link to="/images">Images</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <FaApple className="icon" />
    <Button>Styled Button</Button>
    <Link to="/page-2">Go to page 2</Link>
    <Link to="/products/testing">Testing</Link>
  </Layout>
);

export default IndexPage;
