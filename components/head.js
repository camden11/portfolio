import NextHead from "next/head";
import React from "react";

const Head = ({ head }) => {
  return (
    <NextHead>
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <meta property="og:title" content={head.title} />
      <meta property="og:type" content="website" />s
    </NextHead>
  );
};

export default Head;
