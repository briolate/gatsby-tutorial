import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const getPic = graphql`
  {
    file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default function picAlt() {
  return (
    <StaticQuery
      query={getPic}
      render={data => {
        console.log(data);
        return (
          <div style={{ maxWidth: '300px' }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        );
      }}
    />
  );
}
