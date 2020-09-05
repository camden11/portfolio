import React from "react";

const Contact = ({ content }) => {
  return (
    <div className="grid">
      <div className="column-6">
        <h3>{content.contactHeader}</h3>
      </div>
      <div className="column-6">
        <h3>{content.resumeHeader}</h3>
      </div>
    </div>
  );
};

export default Contact;
