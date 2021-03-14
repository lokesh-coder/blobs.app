import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logo = ({ size = 100 }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "blobs-logo.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Link to="/">
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Blobs logo"
        style={{ height: size, width: size }}
      />
    </Link>
  );
};

export default Logo;
