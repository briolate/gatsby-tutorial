import React from 'react';
import Layout from '../../components/layout';
import { Link } from 'gatsby';

function testing() {
  return (
    <Layout>
      <h1>Hello from testing</h1>
      <Link to="/">Back to Home</Link>
    </Layout>
  );
}

export default testing;
