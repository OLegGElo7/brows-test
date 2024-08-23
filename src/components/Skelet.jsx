import React from "react";
import ContentLoader from "react-content-loader";

const Skelet = (props) => {
  return (
    <ContentLoader
      speed={1}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f0b2ee"
      foregroundColor="#c1c2ec"
      {...props}
    >
      <rect x="95" y="70" rx="2" ry="2" width="76" height="10" />
      <rect x="16" y="48" rx="2" ry="2" width="265" height="10" />
      <rect x="86" y="97" rx="37" ry="37" width="100" height="200" />
    </ContentLoader>
  );
};

export default Skelet;
